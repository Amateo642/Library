import { APIKey } from "../secrets";

const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKeyParam = '&key=' + APIKey;
const startParam = '&startIndex=';
const maxResult = '&maxResults=30';

export const getBooksByTitle = (title, startIndex = 0) => {
    const url = apiUrl + title + maxResult + startParam + startIndex + apiKeyParam;
    return fetch(url)
        .then(response => response.json()) 
        .then(json => {
            const res = {
                totalBooks: 0,
                books: []
            } 
            if (!json || json.totalItems === 0) {
                return res;
            }

            res.totalBooks = json.totalItems;
            res.books = json.items
                .map(item => {
                    const info = item.volumeInfo;
                    const thumbnail = info.imageLinks && info.imageLinks.thumbnail;
                    const smallThumbnail = info.imageLinks && info.imageLinks.smallThumbnail;
                    const categories = info.categories && info.categories[0];
                    const category = categories && categories.split(' ', 1);
                    return ({
                        authors: info.authors,
                        thumbnail: thumbnail,
                        smallThumbnail: smallThumbnail,
                        categories: info.categories,
                        title: info.title,
                        description: info.description,
                        id: item.id,
                        genre: category
                    });
                });
            return res;
        });
};    

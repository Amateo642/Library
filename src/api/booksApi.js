import { APIKey } from "../secrets";

const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKeyParam = '&maxResults=30&key=' + APIKey;

export const getBooksByTitle = (title) => {
    return fetch(apiUrl + title + apiKeyParam)
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
                    return ({
                        authors: info.authors,
                        thumbnail: thumbnail,
                        smallThumbnail: smallThumbnail,
                        categories: info.categories,
                        title: info.title,
                        id: item.id
                    });
                });
            return res;
        });
};    

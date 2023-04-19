import { APIKey } from "../secrets";

const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKeyParam = '&key=' + APIKey;
const startParam = '&startIndex=';
const maxResult = '&maxResults=30';
const orderBy = '&orderBy=';

export const getBooksByTitle = (title, sorting, startIndex = 0) => {
    const url = apiUrl + title + maxResult + orderBy + sorting + startParam + startIndex + apiKeyParam;
    return fetch(url)
        .then(response => response.json()) 
        .then(json => {
            console.log(json.items.map(item => item.volumeInfo.categories))
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
                    const categories = info.categories && info.categories[0] || '';
                    const published = info.publishedDate;

                    return ({
                        authors: info.authors,
                        thumbnail: thumbnail,
                        smallThumbnail: smallThumbnail,
                        categories: categories,
                        title: info.title,
                        description: info.description,
                        id: item.id,
                        year: published
                    });
                });
            return res;
        });
};    

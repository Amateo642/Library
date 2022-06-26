import { APIKey } from "../secrets";

const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKeyParam = '&key=' + APIKey;

export const getBooksByTitle = (title) => {
    return fetch(apiUrl + title + apiKeyParam)
        .then(response => response.json()) 
        .then(json => { 
            if (!json || json.totalItems === 0) {
                return [];
            }
            return json.items 
                .map(item => {
                    const info = item.volumeInfo;
                    if (info.imageLinks) {
                    return ({
                        authors: info.authors,
                        thumbnail: info.imageLinks.thumbnail,
                        smallThumbnail: info.imageLinks.smallThumbnail,
                        categories: info.categories,
                        title: info.title,
                    }) 
                } else {
                     return ({
                        authors: info.authors,
                        thumbnail: undefined,
                        smallThumbnail: undefined,
                        categories: info.categories,
                        title: info.title,
                    })
                }                         
                })
        });
}

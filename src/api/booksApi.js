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
                    
                    return ({
                        authors: info.authors,
                        imageLinks: info.imageLinks,
                        categories: info.categories,
                        title: info.title,
                    })/*.map(
                        (() => {
                            const image = info.imageLinks;
                            return ({
                                small: image.smallthumbnail,
                                norm: image.thumbnail,
                            })
                        })
                   )*/ 
                })
        });
}

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const getBooksByTitle = (title) => {
    fetch(apiUrl+title)
    .then(response => response.json())
    .then(json => console.log(json))
}


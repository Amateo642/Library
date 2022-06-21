import React from "react";
import BooksItem from "./BooksItem";

const BooksList = ({books, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {books.map((book) =>
                <BooksItem book={book} key={book.id}/>
            )}
        </div>
    )
}

export default BooksList;
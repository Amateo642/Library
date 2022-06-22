import React from "react";
import BooksItem from "./BooksItem";
import './BooksList.css';

const BooksList = ({books}) => {
    return (
        <div className="books">
            {books.map((book) =>
                <div className="book-wrapper">
                    <BooksItem book={book} key={book.id}/>
                </div>
            )}
        </div>
    )
}

export default BooksList;
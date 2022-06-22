import React from "react";
import BooksItem from "./BooksItem";

const BooksList = ({books}) => {
    return (
        <div>
            {books.map((book) =>
                <BooksItem book={book} key={book.id}/>
            )}
        </div>
    )
}

export default BooksList;
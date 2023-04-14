import React from "react";
import BooksItem from "./BooksItem";
import './BooksList.css';

const BooksList = ({books, onBookSelect}) => {
  // TODO здесь отфильтровать книги по жанру. 
    return (
      <div className="books">
        {books.map((book) => (
          <div className="book-wrapper" key={book.id}>
            <BooksItem book={book} onBookSelect={onBookSelect} />
          </div>
        ))}
      </div>
    );
}

export default BooksList;
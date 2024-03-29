import React from "react";
import BooksItem from "./BooksItem";
import './BooksList.css';

const BooksList = ({books, onBookSelect, genre}) => {
  const filteredBooks = genre === 'All' ? books : books.filter(book => book.categories.includes(genre));
  return (
      <div className="books">
        { filteredBooks.map((book) => (
          <div className="book-wrapper" key={book.id}>
            <BooksItem book={book} onBookSelect={onBookSelect} />
          </div>
        ))}
      </div>
    );
}

export default BooksList;
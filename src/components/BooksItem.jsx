import React from "react";
import './BooksItem.css';

const BooksItem = ({book, onBookSelect}) => {
    return (
      <div className="book" onClick={() => onBookSelect(book)}>
        <div className="book__content">
          <div className="book-img">
            <img src={book.smallThumbnail} alt="image" />
          </div>
          <div>
            <p>{book.genre}</p>
            <p>{book.title}</p>
            <p>{book.authors}</p>
          </div>
        </div>
      </div>
    );
}

export default BooksItem;
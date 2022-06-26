import React from "react";
import './BookPreview.css';

const BookPreview = ({book}) => {
    return (
      <div className="book-preview">
        <div className="book-preview__content">
          <div className="book-preview-img">
            <img src={book.thumbnail} alt="image" />
          </div>
          <div className="book-preview-text">
            <p>{book.categories}</p>
            <p>{book.title}</p>
            <p>{book.authors}</p>
          </div>
        </div>
      </div>
    );
}

export default BookPreview;
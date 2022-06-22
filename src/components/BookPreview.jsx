import React from "react";
import './BookPreview.css';

const BookPreview = (props) => {
    return (
      <div className="book-preview">
        <div className="book-preview__content">
          <div className="book-preview-img">
            <img src={props.book.image} alt="image" />
          </div>
          <div className="book-preview-text">
            <p>{props.book.genre}</p>
            <p>{props.book.title}</p>
            <p>{props.book.author}</p>
          </div>
        </div>
      </div>
    );
}

export default BookPreview;
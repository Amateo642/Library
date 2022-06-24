import React from "react";
import './BookPreview.css';

const BookPreview = (props) => {
    return (
      <div className="book-preview">
        <div className="book-preview__content">
          <div className="book-preview-img">
            <img src={props.book.imageLinks.thumbnail} alt="image" />
          </div>
          <div className="book-preview-text">
            <p>{props.book.categories}</p>
            <p>{props.book.title}</p>
            <p>{props.book.authors}</p>
          </div>
        </div>
      </div>
    );
}

export default BookPreview;
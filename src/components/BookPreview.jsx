import React from "react";
import { useDispatch } from "react-redux";
import { resetSelectedBookAction } from "../store/store";
import './BookPreview.css';

const BookPreview = ({book}) => {

const dispatch = useDispatch();

const handleSelectedBook = () => {
  dispatch(resetSelectedBookAction());
}

    return (
      <div className="book-preview">
        <div className="close" onClick={handleSelectedBook}>
        </div>
        <div className="book-preview__content">
          <div className="book-preview-header">
            <div className="book-preview-img">
              <img src={book.thumbnail === undefined ? 'https://www.penn.museum/collections/images/image_not_available_300.jpg' : book.thumbnail} alt="image" />
            </div>
            <div className="book-preview-text">
              <p className="book-preview-title">{book.title}</p>
              <p className="book-details">Authors: {book.authors}</p>
              <p className="book-details">Categories: {book.genre}</p>
              <p className="book-details">Published: {book.year}</p>
            </div>
          </div>
          <div className="book-preview-description">
              <p>{book.description}</p>
          </div>
        </div>
      </div>
    );
}

export default BookPreview;
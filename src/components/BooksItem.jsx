import React from "react";
import './BooksItem.css';

const BooksItem = ({book, onBookSelect}) => {
  const smallThumbnail = book.smallThumbnail === undefined ? 'https://www.penn.museum/collections/images/image_not_available_300.jpg' : book.smallThumbnail;
  const authors = book.authors === undefined ? 'Not available' : book.authors.join(', ');
  const published = book.year === undefined || book.year === '0000' ? 'not available': book.year.substring(0, 4);

    return (
      <div className="book" onClick={() => onBookSelect(book)}>
        <div className="book__content">
          <div className="book-img">
            <img src={smallThumbnail} alt="image" />
          </div>
          <div>
            <p className="book-title">{book.title}</p>
            <p className="book-details">Authors: {authors}</p>
            <p className="book-details">Categories: {book.genre}</p>
            <p className="book-details">Published: {published}</p>
          </div>
        </div>
      </div>
    );
}

export default BooksItem;
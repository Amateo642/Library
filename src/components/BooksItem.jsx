import React from "react";
import './BooksItem.css';

const BooksItem = (props) => {

    return (
        <div className='book'>
            <div className= 'book__content'>
                <div className="book-img">
                    <img src={props.book.image} alt="image"/>
                </div>
                <div>
                    <p>{props.book.genre}</p>
                    <p>{props.book.title}</p>
                    <p>{props.book.author}</p>
                </div>   
            </div>
        </div>
    );
}

export default BooksItem;
import React from "react";

const BooksItem = (props) => {

    return (
        <div className='book'>
            <div className= 'book__content'>
                <strong>{props.book.id}. {props.book.title}</strong>
                <div>
                    {props.book.body}
                </div>
            </div>
            <div className='book__btns'>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default BooksItem;
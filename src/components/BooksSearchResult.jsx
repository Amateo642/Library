import React from "react";
import BooksList from "./BooksList";
import './BooksSearchResult.css';
import { useDispatch, useSelector } from "react-redux";
import { selectBookAction } from "../store/store";
import { getMoreBooksAction } from "../store/asyncActions";

function BooksSearchResult() { 
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const books = useSelector(state => state.books);
  const totalBooks = useSelector(state => state.totalBooks);
  const error = useSelector(state => state.error);
  const genre = useSelector(state => state.genre);

  function handleBookSelect(book) { 
    dispatch(selectBookAction(book)) 
  }

  function handleLoadMore() { 
   dispatch(getMoreBooksAction()) 
  }

  if (error) {
    return <p>Упс...</p>;
  }

  return (
    <>
      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}      
      
      <BooksList books={books} onBookSelect={handleBookSelect} genre={genre}/>
      
      {totalBooks - books.length > 0 && !loading &&
        <div className="pagination">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      }
    </>
  );
}

export default BooksSearchResult;
import React from "react";
import './stylesheets/style.css';
import Search from "./components/Search";
import BooksList from "./components/BooksList";
import BookPreview from "./components/BookPreview";
import Preloader from "./components/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { selectBookAction } from "./store/store";
import { getBooksByTitleAction, getMoreBooksAction } from "./store/asyncActions";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const books = useSelector(state => state.books);
  const totalBooks = useSelector(state => state.totalBooks);
  const selectedBook = useSelector(state => state.selectedBook);


  function handleBookSelect(book) {
    dispatch(selectBookAction(book))
  }

  function handleLoadMore() {
   dispatch(getMoreBooksAction())
  }

  return (
    <div className="App">
      <Search />

      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}

      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect} />)}

      {loading && <Preloader /> }
      
      {totalBooks - books.length > 0 && !loading &&
        <div className="pagination">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      }
    </div>
  );
}

export default App;

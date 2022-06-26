import React, { useEffect, useState } from "react";
import './stylesheets/style.css';
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import BookPreview from "./components/BookPreview";
import { getBooksByTitle } from "./api/booksApi";

function App() {
  const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState();

  function handleBookSelect(book) {
    setSelectedBook(book);
  }

  function handleSearch(title) {
    getBooksByTitle(title)
    .then(books => setBooks(books));
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch}/>
      
      <label className="counter" type="text">Found {books.length} results</label>
      
      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect}/>)}
      
      <div className="pagination">
        <button>Load more</button>
      </div>

    </div>
  );
}

export default App;

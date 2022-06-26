import React, { useEffect, useState } from "react";
import './stylesheets/style.css';
import Search from "./components/Search";
import BooksList from "./components/BooksList";
import BookPreview from "./components/BookPreview";
import { getBooksByTitle } from "./api/booksApi";

function App() {
  const [books, setBooks] = useState([]);

  const [totalBooks, setTotalBooks] = useState();

  const [selectedBook, setSelectedBook] = useState();

  function handleBookSelect(book) {
    setSelectedBook(book);
  }

  function handleSearch(title) {
    getBooksByTitle(title)
      .then(({books, totalBooks}) => {
        setBooks(books);
        setTotalBooks(totalBooks);
      });    
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch}/>
      
      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}

      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect} />)}
      
      <div className="pagination">
        <button>Load more</button>
      </div>

    </div>
  );
}

export default App;

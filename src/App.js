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

  const [loading, setLoading] = useState(false);

  function handleBookSelect(book) {
    setSelectedBook(book);
  }

  function handleSearch(title) {
    setLoading(true);
    getBooksByTitle(title)
      .then(({books, totalBooks}) => {
        setBooks(books);
        setTotalBooks(totalBooks);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch}/>

      {loading && <div><p>Loading...</p></div>}

      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}

      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect} />)}
      
      {totalBooks - books.length > 0 && 
        <div className="pagination">
          <button>Load more</button>
        </div>
      }
    </div>
  );
}

export default App;

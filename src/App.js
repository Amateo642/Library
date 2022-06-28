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

  const [searchValue, setSearchValue] = useState('');

  function handleBookSelect(book) {
    setSelectedBook(book);
  }

  function handleSearch(title) {
    setSearchValue(title);
    setLoading(true);
    getBooksByTitle(title)
      .then(({books, totalBooks}) => {
        setBooks(books);
        setTotalBooks(totalBooks);
        setLoading(false);
      });
  }

  function handleLoadMore() {
    setLoading(true);
    getBooksByTitle(searchValue, books.length)
      .then(({books: newBooks}) => {
        setBooks(books.concat(newBooks));
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch}/>

      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}

      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect} />)}

      {loading && <div><p>Loading...</p></div>}

      {totalBooks - books.length > 0 && 
        <div className="pagination">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      }
    </div>
  );
}

export default App;

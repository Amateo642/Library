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

  //const [loading, setLoading] = useState(false);

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

  /*useEffect(() => {
    setTimeout(() => {

    }, 300)
    return () => {
      <p>Loading...</p>
    }
  },[loading])*/

  return (
    <div className="App">
      <Search onSearch={handleSearch}/>
      
      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}

      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect} />)}
      
      {totalBooks > 30 && books.length + 1 ?
        (<div className="pagination">
          <button>Load more</button>
        </div>) : (console.log('нет книг'))
      }
    </div>
  );
}

export default App;

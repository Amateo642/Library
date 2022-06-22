import React, { useState } from "react";
import './stylesheets/style.css';
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import BookPreview from "./components/BookPreview";

function App() {
  const [books, setBooks] = useState( [
    {image: 'https://storage.fabulae.ru/images/authors/10538/foto_96852.jpg' ,genre: 'Computers', title: 'How use keyboard', author: 'Genius Brain'},
    {genre: 'Computers', title: 'Frontend road', author: 'Kitlyaev Dmitriy'},
    {genre: 'Computers', title: 'JS basics', author: 'Frontend Markup'},
    {genre: 'Computers', title: 'JavaScript', author: 'Script Java'},
    {genre: 'Computers', title: 'How use keyboard', author: 'Genius Brain'},
    {genre: 'Computers', title: 'Frontend road', author: 'Kitlyaev Dmitriy'},
    {genre: 'Computers', title: 'JS basics', author: 'Frontend Markup'},
    {genre: 'Computers', title: 'JavaScript', author: 'Script Java'},
  ]);

  const [selectedBook, setSelectedBook] = useState()

  function handleBookSelect(book) {
    setSelectedBook(book);
  }

  return (
    <div className="App">
      {//<Search />
      }

      <label className="counter" type="text">Found 6 results</label>
      
      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect}/>)}
      
      <div className="pagination">
        <button>Load more</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './stylesheets/style.css';
import BooksList from "./components/BooksList";

function App() {
  const [books, setBooks] = useState( [
    {image: ('/src/assets/book.jpg') ,genre: 'Computers', title: 'How use keyboard', author: 'Genius Brain'},
    {genre: 'Computers', title: 'Frontend road', author: 'Kitlyaev Dmitriy'},
    {genre: 'Computers', title: 'JS basics', author: 'Frontend Markup'},
    {genre: 'Computers', title: 'JavaScript', author: 'Script Java'},
  ])

  return (
    <div className="App">
      <div className="search">

        <h1>Search for books</h1>

        <form className="search-line">
          <input type="text" name="key" placeholder="Введите название книги"></input>
          <button className="search-button">Search</button>
        </form>

        <div className="selects-wrapper">
          <p>Categories</p>
          <form className="filter">
            <select className="genre" size="4">
                <option value="all" selected="selected">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
          </form>

          <p>Sorting by</p>
          <form className="sorting">            
            <select className="genre" size="4">
                <option value="relevance" selected="selected">Relevance</option>
                <option value="newest">Newest</option>
            </select>
          </form>
        </div> 

      </div>

      <label className="counter" type="text">Found 6 results</label>

      <div className="books">
        <BooksList books={books}/>
      </div>

      <div className="pagination">
        <button>Load more</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './stylesheets/style.css';
import BooksItem from './components/BooksItem';
import BooksList from "./components/BooksList";

function App() {
  const [books, setBooks] = useState( [
    {id: 1, title: 'Rasputin', body: 'Description'},
    {id: 2, title: 'Kitlyaev', body: 'Description'},
    {id: 3, title: 'Garyaev', body: 'Description'},
  ])

  const [books2, setBooks2] = useState( [
    {id: 1, title: 'Python - start to end', body: 'Description'},
    {id: 2, title: 'JS for newbees', body: 'Description'},
    {id: 3, title: 'Java easy', body: 'Description'},
  ])

  return (
    <div className="App">
      <form className="search">
        <input type="text" name="key" placeholder="Введите название книги"></input>
        <button className="search-button">Поиск</button>
      </form>

      <div className="form-wrapper">
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

      <form className="sorting">
        <select className="genre" size="4">
            <option value="relevance" selected="selected">Relevance</option>
            <option value="newest">Newest</option>
        </select>
      </form>
      </div> 

      <label className="counter" type="text">6</label>

      <BooksList books={books} title = 'Biography books'/>
      <BooksList books={books2} title = 'Computers books'/>

      <div className="pagination">
        <button>Load more</button>
      </div>
    </div>
  );
}

export default App;

import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <h1>Search for books</h1>

      <form className="search-line">
        <input
          type="text"
          name="key"
          placeholder="Введите название книги"
        ></input>
        <button className="search-button">Search</button>
      </form>

      <div className="selects-wrapper">
        <p>Categories</p>
        <form className="filter">
          <select className="genre" size="4">
            <option value="all" selected="selected">
              All
            </option>
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
            <option value="relevance" selected="selected">
              Relevance
            </option>
            <option value="newest">Newest</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Search;

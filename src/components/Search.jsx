import React from "react";
import './Search.css';
import loupe from '../assets/loupe.png';
import { getBooksByTitleAction } from "../store/asyncActions";
import { searchValueAction } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.searchValue);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(getBooksByTitleAction(searchValue)) // dispatch searchValueAction и dispatch getBooksByTitleAction
    }
  };

  const handleChange = (event) => {
    dispatch(searchValueAction(event.target.value));  
  };
  
  return (
    <div className="search">
      <h1>Search for books</h1>

      <div className="search-line">
        <input
          type="text"
          placeholder="Введите название книги"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={searchValue}
        />
        <div className="loupe" onClick={() => dispatch(getBooksByTitleAction(searchValue))}>
          <img src={loupe} alt="loupe"/>
        </div>
      </div>

      <div className="selects-wrapper">
        <p>Categories</p>
        <form className="filter">
          <select className="genre" size="1">
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
          <select className="genre" size="1">
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

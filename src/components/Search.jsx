import React from "react";
import './Search.css';
import loupe from '../assets/loupe.png';
import { getBooksByTitleAction } from "../store/asyncActions";
import { searchValueAction, changeSortingAction, changeGenreAction } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const Search = () => { //делаем поиск
  const dispatch = useDispatch(); //создали диспач
  const searchValue = useSelector(state => state.searchValue); //запрос
  //const sortValue = useSelector(state => state.orderBy)

  const handleKeyDown = (event) => { //обработчик на кнопку интер
    if (event.key === "Enter") { //при условии что нажали интер
      dispatch(getBooksByTitleAction(searchValue)) //передали экшн с запросом
    }
  };

  const handleChange = (event) => { //обработчик изменений в инпуте
    dispatch(searchValueAction(event.target.value)); //передали экшн с запросом 
  };

  const handleSorting = (event) => {
    dispatch(changeSortingAction(event.target.value));
    dispatch(getBooksByTitleAction(searchValue));
  };

  const handleChangeCategories = (event) => {
    dispatch(changeGenreAction(event.target.value));
  }
        //render
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
          <select className="genre" size="1" onChange={handleChangeCategories}>
            <option value="All">
              All
            </option>
            <option value="Art">Art</option>
            <option value="Biography">Biography</option>
            <option value="Computers">Computers</option>
            <option value="History">History</option>
            <option value="Medical">Medical</option>
            <option value="Poetry">Poetry</option>
          </select>
        </form>

        <p>Sorting by</p>
        <form className="sorting">
          <select className="genre" size="1" onChange={handleSorting}>
            <option value='relevance'>
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

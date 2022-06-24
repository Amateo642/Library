import React, {useState} from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchValue('');
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
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
        <button className="search-button" 
          onClick={() => setSearchValue('')}
        >Search</button>
      </div>

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

import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="search-input-container">
          <input type="text" className="search-input" />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="search-options">
          <input type="checkbox" id="search-include" />
          <label htmlFor="search-include">Include related words</label>
          <button className="search-button search-tools">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

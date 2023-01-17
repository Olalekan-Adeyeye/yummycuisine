import React from "react";
import "../css/Search.css";

const Search = ({ handleSubmit, handleChange, value }) => {
  return (
    <form method="GET" onSubmit={handleSubmit}>
      <input
        type="text"
        name="recipe-search"
        className="search-input"
        placeholder="Search for recipe..."
        required
        value={value}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;

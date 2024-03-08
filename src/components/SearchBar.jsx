import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({query, setQuery, onSearch}) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search"
        className="search-input"
      />
      <Link to={`/search/${query}`} onClick={onSearch} className="search-button">
        Search
      </Link>
    </div>
  );
};

export default SearchBar;
import React, { useState } from 'react';

const SearchBar = ({ onSearchTermSubmit, defaultSearchTerm, title }) => {
  const [term, setTerm] = useState(defaultSearchTerm);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <h3 className="ui header">{title}</h3>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <label>Press enter to search</label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

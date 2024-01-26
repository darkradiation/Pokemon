// SearchBar.jsx
import React from "react";
import Autosuggest from "react-autosuggest";

const SearchBar = ({
  searchTerm,
  suggestions,
  handleSearch,
  handleSuggestionSelected,
  handleSuggestionsFetchRequested,
  handleSuggestionsClearRequested,
  setSearchTerm,
  selectedType,
  setSelectedType,
}) => {
  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const inputProps = {
    placeholder: "Enter Pokemon name",
    value: searchTerm,
    onChange: (_, { newValue }) => setSearchTerm(newValue),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
  };

  return (
    <div className="search-bar">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={handleSuggestionSelected}
      />
      <button onClick={handleSearch}>Search</button>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        {/* Add more options for each Pokemon type */}
      </select>
    </div>
  );
};

export default SearchBar;

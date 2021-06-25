import React from "react";

function Search({searchItems, searchTerm}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleChange(e){
    searchItems(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

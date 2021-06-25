import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
console.log(listings)
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  function onDelete(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }
  console.log(listings)

  function searchItems(currentSearch) {
    console.log(currentSearch)
    setSearchTerm(currentSearch) 
  }
  
  const newList = listings.filter((listing) => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header searchItems={searchItems} searchTerm={searchTerm} />
      <ListingsContainer onDelete={onDelete} listings={newList} />
    </div>
  );
}

export default App;

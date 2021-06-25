import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {

  function renderListings() {
    return listings.map((listing) => {
      return (
        <ListingCard key={listing.id} listing={listing} onDelete={onDelete}
        />
      )
    })
  }

  
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {renderListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;

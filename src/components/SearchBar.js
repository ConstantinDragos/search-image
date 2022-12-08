import React, { useState } from "react";
import searchImages from "../helpers/searchHelper";

const SearchBar = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async () => {
    const images = await searchImages(search);
    onSearchSubmit(images);
  };

  return (
    <div className="search">
      <input value={search} onChange={handleChange} />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default SearchBar;

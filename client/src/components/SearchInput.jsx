import React from "react";
import Glass from "../img/glass_search.svg";

const SearchInput = () => {
  return (
    <form action="" className="form__field">
      <img src={Glass} alt="search" className="search__glass" />
      <label htmlFor="">
        <input
          type="search"
          className="search__field"
          id="search"
          placeholder="Search item..."
        />
      </label>
    </form>
  );
};

export default SearchInput;

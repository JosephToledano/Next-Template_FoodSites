import React from "react";
import { NextPage } from "next";
import Searchbar from "../../components/discovery/searchbar/Searchbar";
import useTitleAndSearch from "../../hooks/landing/useTitleAndSearch";

const TitleAndSearch: NextPage = () => {
  const { value, handleClick, handleChange, placeholder } = useTitleAndSearch();

  return (
    <div className='title-and-search-container'>
      <div className='title-container'>
        <p className='large-title-text'>Find the best _ in __</p>
      </div>
      <div className='search-contaier'>
        <Searchbar
          value={value}
          placeholder={placeholder}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TitleAndSearch;

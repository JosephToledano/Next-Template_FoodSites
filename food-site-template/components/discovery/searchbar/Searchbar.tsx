import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import TextField from "../../common/inputfields/TextField";
import SearchIcon from "@material-ui/icons/Search";

interface SearchbarProps {
  value: string;
  placeholder: string;
  handleChange: (e: React.SyntheticEvent) => void;
  handleClick: (e: React.SyntheticEvent) => void;
}

const Searchbar: NextPage<SearchbarProps> = ({
  value = "text",
  placeholder = "search here",
  handleClick,
  handleChange,
}) => {
  return (
    <div className='search-bar'>
      <TextField
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
      />
      <div className='search-bar-image-container' onClick={handleClick}>
        <SearchIcon className='search-icon' />
      </div>
    </div>
  );
};

export default Searchbar;

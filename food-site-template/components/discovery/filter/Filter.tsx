import React from "react";
import { NextPage } from "next";

interface TextFieldProps {
  value: string;
  handleClick: (e: React.SyntheticEvent) => void;
  filterContainerClassName: string;
}

const TextField: NextPage<TextFieldProps> = ({
  value = "text",
  handleClick,
  filterContainerClassName = "filter-container",
}) => {
  return (
    <div className={filterContainerClassName} onClick={handleClick}>
      <p className='small-subheader-text'>{value}</p>
    </div>
  );
};

export default TextField;

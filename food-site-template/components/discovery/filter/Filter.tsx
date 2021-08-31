import React from "react";
import { NextPage } from "next";

interface TextFieldProps {
  value: string;
  handleClick: (e: React.SyntheticEvent) => void;
}

const TextField: NextPage<TextFieldProps> = ({
  value = "text",
  handleClick,
}) => {
  return (
    <div className='filter-container' onClick={handleClick}>
      <p className='small-subheader-text'>{value}</p>
    </div>
  );
};

export default TextField;

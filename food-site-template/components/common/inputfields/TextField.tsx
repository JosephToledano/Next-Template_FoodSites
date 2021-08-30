import React from "react";
import { NextPage } from "next";

interface TextFieldProps {
  placeholder: string;
  value: string;
  handleChange: (e: React.SyntheticEvent) => void;
}

const TextField: NextPage<TextFieldProps> = ({
  placeholder = "Sign Up",
  value,
  handleChange,
}) => {
  return (
    <div className='text-field-container'>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        className='text-field'
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TextField;

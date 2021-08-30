import React from "react";
import { NextPage } from "next";
import Link from "next/link";

interface ButtonProps {
  text?: string;
  link?: string;
  handleClick?: (e: React.SyntheticEvent) => void;
  buttonClassName?: string;
  buttonContainerClassName?: string;
}

const GenericButton: NextPage<ButtonProps> = ({
  text = "Sign Up",
  link = "/",
  handleClick,
  buttonClassName,
  buttonContainerClassName,
}) => {
  return (
    <div
      className={
        buttonContainerClassName
          ? buttonContainerClassName
          : "signup-button-container"
      }
    >
      <Link href={link} passHref>
        <button
          className={buttonClassName ? buttonClassName : "signup-button"}
          onClick={handleClick}
        >
          <a className='small-body-text'>{text} </a>
        </button>
      </Link>
    </div>
  );
};

export default GenericButton;

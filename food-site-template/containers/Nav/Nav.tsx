import React from "react";
import { NextPage } from "next";

const Nav: NextPage = () => {
  return (
    <div className='nav-container'>
      <div className='nav-container-left-side'>
        <p className='small-subheader-text'>Test</p>
      </div>
      <div className='nav-container-right-side'>
        <p className='medium-body-text'>Test</p>
      </div>
    </div>
  );
};

export default Nav;

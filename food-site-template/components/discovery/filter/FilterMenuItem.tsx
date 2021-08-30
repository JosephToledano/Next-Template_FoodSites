import React from "react";
import { NextPage } from "next";
import Checkbox from "@material-ui/core/Checkbox";

interface FilterMenuItemProps {
  value: string;
}

const FilterMenuItem: NextPage<FilterMenuItemProps> = ({ value = "" }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='filter-menu-item'>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className='small-subheader-text'>{value}</p>
    </div>
  );
};

export default FilterMenuItem;

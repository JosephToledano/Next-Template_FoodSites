import React from "react";
import { NextPage } from "next";
import FilterMenuItem from "./FilterMenuItem";

type filterItem = {
  value: string;
};

interface FilterMenuProps {
  filterList: filterItem[];
}

const FilterMenu: NextPage<FilterMenuProps> = ({
  filterList = ["filter-container"],
}) => {
  return (
    <div className='filter-menu-container'>
      {filterList.map((item: any, index: number) => (
        <FilterMenuItem value={item.value} key={`${item} ${index}`} />
      ))}
    </div>
  );
};

export default FilterMenu;

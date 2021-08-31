import React from "react";
import { NextPage } from "next";
import Filter from "../../components/discovery/filter/Filter";

type filter = {
  value: string;
  handleClick: (e: React.SyntheticEvent) => void;
};

interface filterProps {
  filters: filter[];
}

const FiltersSection: NextPage<filterProps> = ({ filters = ["Chinese"] }) => {
  return (
    <div className='filters-container'>
      {filters.map((item: any, index: number) => (
        <Filter
          value={item.value}
          handleClick={item.handleClick}
          key={`${item} ${index}`}
        />
      ))}
    </div>
  );
};

export default FiltersSection;

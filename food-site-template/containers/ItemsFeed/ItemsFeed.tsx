import React from "react";
import { NextPage } from "next";

import CardFeed from "../cards/CardFeed";
import FiltersSection from "../filters/FiltersSection";

import useItemsFeed from "../../hooks/landing/useItemsFeed";
import useFilters from "../../hooks/landing/useFilters";

const ItemsFeed: NextPage = () => {
  const { filters } = useFilters();
  const { items } = useItemsFeed();

  return (
    <div className='items-feed-container'>
      <div>
        <FiltersSection filters={filters} />
      </div>
      <CardFeed items={items} />
    </div>
  );
};

export default ItemsFeed;

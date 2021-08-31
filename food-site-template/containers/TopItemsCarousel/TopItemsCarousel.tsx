import React from "react";
import { NextPage } from "next";
import { useSwipeable } from "react-swipeable";

import TopItems from "../cards/TopItems/TopItems";
import useTopItems from "../../hooks/landing/useTopItems";

const TopItemsCarousel: NextPage = () => {
  const { items } = useTopItems();

  return (
    <div className='top-items-carousel'>
      <TopItems items={items} />
    </div>
  );
};

export default TopItemsCarousel;

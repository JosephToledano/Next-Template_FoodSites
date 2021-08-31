import React from "react";
import { NextPage } from "next";
import ItemCard from "../../../components/card/item/ItemCard";

type TopItem = {
  title: string;
  id: number;
  image?: string;
  category: string;
  rating?: number;
  ratings?: number;
  handleClick?: (e: React.SyntheticEvent) => void;
};

interface TopItemsProp {
  items: TopItem[];
}

const TopItems: NextPage<TopItemsProp> = ({ items = ["Chinese"] }) => {
  return (
    <div className='top-items-container'>
      {items.map((item: any, index: number) => (
        <ItemCard
          id={item.id}
          title={item.title}
          image={item.image}
          category={item.category}
          rating={item.rating}
          ratings={item.ratings}
          handleClick={item.handleClick}
          key={`${item} ${index}`}
        />
      ))}
    </div>
  );
};

export default TopCategories;

import React from "react";
import { NextPage } from "next";
import ItemCard from "../../components/card/item/ItemCard";

type Item = {
  title: string;
  id: number;
  image?: string;
  category: string;
  rating?: number;
  ratings?: number;
  handleClick?: (e: React.SyntheticEvent) => void;
};

interface ItemsProps {
  items: Item[];
}

const Items: NextPage<ItemsProps> = ({ items = ["Chinese"] }) => {
  return (
    <div className='items-container'>
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

export default Items;

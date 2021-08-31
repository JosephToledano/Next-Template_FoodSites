import React from "react";
import { NextPage } from "next";
import FilterMenuItem from "./FilterMenuItem";
import CategoryCard from "../../../components/card/category/CategoryCard";

type Category = {
  title: string;
  subHeader: "Test";
  image: "./fallbackCategory";
  handleClick?: (e: React.SyntheticEvent) => void;
};

interface TopCategoriesProp {
  categories: Category[];
}

const TopCategories: NextPage<TopCategoriesProp> = ({
  categories = ["Chinese"],
}) => {
  return (
    <div className='top-categories-container'>
      {categories.map((item: any, index: number) => (
        <CategoryCard
          title={item.title}
          subHeader={item.subHeader}
          image={item.image}
          handleClick={item.handleClick}
          key={`${item} ${index}`}
        />
      ))}
    </div>
  );
};

export default TopCategories;

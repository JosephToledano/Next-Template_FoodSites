import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image?: string;
  subHeader: string;
  handleClick?: (e: React.SyntheticEvent) => void;
}

const CategoryCard: NextPage<CategoryCardProps> = ({
  title = "Chinese",
  subHeader = "Test",
  image = "./fallbackCategory",
  handleClick,
}) => {
  return (
    <Link href={`./category/${title}`} passHref>
      <a>
        <div className='medium-card' onClick={handleClick}>
          <div className='category-card-image'>
            <Image
              alt={`${title} category`}
              src={image}
              height={600}
              width={400}
              layout={"responsive"}
            />
          </div>
          <div className='title-and-subheader-section'>
            <p className='small-subheader'>{title}</p>
            <p className='small-subheader-text'>{subHeader}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CategoryCard;

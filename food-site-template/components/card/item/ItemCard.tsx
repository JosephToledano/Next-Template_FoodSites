import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
  title: string;
  id: number;
  image?: string;
  category: string;
  rating?: number;
  ratings?: number;
  handleClick?: (e: React.SyntheticEvent) => void;
}

const ItemCard: NextPage<ItemCardProps> = ({
  title = "Chinese",
  id = 0,
  category = "Test",
  rating = 8,
  ratings = 10,
  image = "./fallbackCategory",
  handleClick,
}) => {
  return (
    <Link href={`./item/${id}`} passHref>
      <a>
        <div className='small-card' onClick={handleClick}>
          <div className='category-card-image'>
            <Image
              alt={`${title} category`}
              src={image}
              height={200}
              width={200}
              layout={"responsive"}
            />
          </div>
          <div className='card-details-section'>
            <div className='title-and-subheader-section'>
              <p className='small-subheader-text'>{title}</p>
              <p className='medium-body-text'>{category}</p>
            </div>
            <div className='ratings-section'>
              <p className='small-subheader-text'>{rating}</p>
              <p className='medium-body-text'>{ratings}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ItemCard;

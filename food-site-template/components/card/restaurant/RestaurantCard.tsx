import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface RestaurantCardProps {
  title: string;
  id: number;
  image?: string;
  category: string;

  handleClick?: (e: React.SyntheticEvent) => void;
}

const RestaurantCard: NextPage<RestaurantCardProps> = ({
  title = "Chipotle",
  id = 0,
  category = "Test",
  image = "./fallbackCategory",
  handleClick,
}) => {
  return (
    <Link href={`./restaurant/${id}`} passHref>
      <a>
        <div className='medium-card' onClick={handleClick}>
          <div className='category-card-image'>
            <Image
              alt={`${title} restaurant`}
              src={image}
              height={600}
              width={400}
              layout={"responsive"}
            />
          </div>
          <div className='card-details-section'>
            <div className='title-and-subheader-section'>
              <p className='small-subheader-text'>{title}</p>
              <p className='medium-body-text'>{category}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RestaurantCard;

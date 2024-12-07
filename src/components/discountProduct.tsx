"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

export interface PCard {
  id: number;
  imageSrc: string;
  discount?: string; 
  heading: string;
  originalPrice: number;
  discountedPrice?: number;
  rating: number;
  totalRatings: number;
  isWishList? : boolean
}

const DiscountProductCard = ({
  imageSrc,
  discount,
  heading,
  originalPrice,
  discountedPrice,
  rating,
  totalRatings,
}: PCard) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <AiFillStar key={`full-${i}`} className="text-[#FFAD33] text-md md:text-xl" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-[#FFAD33] " />
      );
    }
    

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <AiFillStar key={`empty-${i}`} className="text-gray-300 text-md md:text-xl" />
      );
    }

    return stars;
  };

  return (
    <div className="relative max-w-[270px] gap-y-2 lg:gap-y-4 bg-white  overflow-hidden flex flex-col">
      {/* Outer Image Container */}
      <div
        className="relative h-[200px] md:h-[270px] lg:h-[270px] w-full bg-gray-100 flex items-center rounded-md justify-center "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Inner Image Container */}
        <div className="relative w-[190px] h-[120px] md:h-[180px] lg:h-[180px] flex items-center justify-center overflow-hidden">
          {/* Image */}
          <div className="sm:w-48 sm:h-44 lg:h-44 lg:w-48 flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={heading}
              fill
              className="object-contain"
            />
          </div>

        </div>
        
          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm p-1 sm:p-2 px-2 sm:px-4 rounded">
              {discount}
            </div>
          )}

          {/* Hover Icons */}
          
              {/* Top-right icons */}
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <IoMdHeartEmpty className="text-xl text-red-500" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <HiOutlineEye className="text-xl text-gray-600" />
                </button>
              </div>

              {isHovered && (
            <>
              {/* Add to Cart Button */}
              <div className="absolute bottom-0 w-full  bg-black flex items-center justify-center transition-opacity duration-300">
                <button className="text-white font-semibold text-md md:text-lg py-2 px-6 border-white hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </>
          )}
      </div>

      {/* Content Section */}
      <div className="lg:space-y-2">
        {/* Heading */}
        <h3 className="text-base font-semibold">{heading}</h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          {discountedPrice ? (
            <>
              <span className="text-red-600 font-bold">${discountedPrice} </span>
              <span className="text-gray-500 line-through">${originalPrice}</span>
            </>
          ) : (
            <span className="text-gray-800 font-bold">${originalPrice}</span>
          )}
        </div>

        {/* Ratings */}
        <div className="flex items-center gapx-1 md:gap-x-2">
          {renderStars()}
          <span className="text-sm text-gray-500">({totalRatings})</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountProductCard;
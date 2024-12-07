"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";

const renderStars = (rating: number) => {
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
    stars.push(<FaStarHalfAlt key="half" className="text-[#FFAD33]" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <AiOutlineStar key={`empty-${i}`} className="text-gray-300 text-md md:text-xl" />
    );
  }

  return stars;
};

const DiscountProductCard = ({
    id,
    imageSrc,
    heading,
    originalPrice,
    rating,
    totalRatings,
    hascolors,
    isNew,
  }: {
    id: number;
    imageSrc: string;
    heading: string;
    originalPrice: number;
    rating: number;
    totalRatings: number;
    hascolors?: boolean;
    isNew?: boolean;
  }) => {
  const [isHovered, setIsHovered] = useState(false);

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
       {isNew && (
  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs md:text-sm p-1 sm:p-2 px-2 sm:px-4 rounded">
    New
  </div>
)}

        {/* Hover Icons */}
        
            {/* Top-right icons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              
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

      {/* Details Section */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium md:text-base">{heading}</h3>

        {/* Price and Stars */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${originalPrice}</span>
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            <span className="text-xs text-gray-500">({totalRatings})</span>
          </div>
        </div>

        {/* Color Options */}
        {hascolors && (
            <div className="flex gap-2 mt-2">
    <button
      onClick={() => console.log(`Black color selected for product ${id}`)}
      className="w-6 h-6 bg-black border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-gray-500 transition"
      title="Black"
    ></button>
    <button
      onClick={() => console.log(`Red color selected for product ${id}`)}
      className="w-6 h-6 bg-red-500 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-red-700 transition"
      title="Red">
        
      </button>
 
  </div>
)}
      </div>
    </div>
  );
};

const ProductList = () => {
  const ourProducts = [
    {
      id: 1,
      imageSrc: "/dog-food.png",
      heading: "Breed Dry Dog Food",
      originalPrice: 100,
      rating: 3,
      totalRatings: 35,
    },
    {
      id: 2,
      imageSrc: "/dslr.png",
      heading: "CANON EOS DSLR Camera",
      originalPrice: 360,
      rating: 4,
      totalRatings: 95,
    },
    {
      id: 3,
      imageSrc: "/laptop.png",
      heading: "ASUS FHD Gaming Laptop",
      originalPrice: 700,
      rating: 5,
      totalRatings: 325,
    },
    {
      id: 4,
      imageSrc: "/curology.avif",
      heading: "Curology Product Set",
      originalPrice: 500,
      rating: 4,
      totalRatings: 145,
    },
    {
      id: 5,
      imageSrc: "/car.png",
      heading: "Kids Electric Car",
      originalPrice: 960,
      rating: 5,
      totalRatings: 65,
      hascolors: true,
      isNew :true
    },
    {
      id: 6,
      imageSrc: "/soccer.png",
      heading: "Jr. Zoom Soccer Cleats",
      originalPrice: 1160,
      rating: 5,
      totalRatings: 35,
      hascolors: true,
    },
    {
      id: 7,
      imageSrc: "/game-pad.png",
      heading: "GP11 Shooter USB Gamepad",
      originalPrice: 660,
      rating: 4.5,
      totalRatings: 55,
      hascolors: true,
      isNew :true
    },
    {
      id: 8,
      imageSrc: "/jacket.png",
      heading: "Quilted Satin Jacket",
      originalPrice: 660,
      rating: 4.5,
      totalRatings: 55,
      hascolors: true,
    },
  ];

  return (
        <section className='mt-16 mb-10'>
       <div className="mx-2 sm: space-y-6 sm:space-y-6 lg:space-y-16 pb-16 lg:pb-20 ">
      <div className="flex justify-between items-end lg:w-full">
        <div className="flex justify-between items-end gap-x-4 md:w-[60%] lg:w-[50%]">
          <div className="flex flex-col justify-between space-y-2 lg:space-y-6">
            <h4 className="lg:border-l-[20px] border-l-[#DB4444] lg:text-base lg:p-4 pr-0 text-[#DB4444] font-semibold">
Our Products
            </h4>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Explore Our Products</h2>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-between lg:space-x-2">
          <span className="bg-gray-100 p-2 rounded-full">
            <FaArrowRight className="text-base sm:text-xl lg:text-2xl" />
          </span>
          <span className="bg-[#F5F5F5] p-2 rounded-full">
            <FaArrowLeft className="text-base sm:text-xl lg:text-2xl" />
          </span>
        </div>

      </div>
    <div className="grid grid-cols-2 mx-auto sm:grid-cols-3  lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-2 xl:gap-x-8">
      {ourProducts.map((product) => (
        <DiscountProductCard
          key={product.id}
          id={product.id}
          imageSrc={product.imageSrc}
          heading={product.heading}
          originalPrice={product.originalPrice}
          rating={product.rating}
          totalRatings={product.totalRatings}
          hascolors={product.hascolors}
          isNew={product.isNew}
        />
      ))}
    </div>
    <div className="flex items-center justify-center"><button className="text-base font-medium text-white bg-[#DB4444] hover:bg-[#c42f2f] py-3 md:py-4 px-4 md:px-12 rounded-md">View All Products</button></div>
    </div>
    
    </section>
  );
};

export default ProductList;
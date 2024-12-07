"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { discountTagProducts } from "../product";
import DiscountProductCard from "../discountProduct";

const FlashSales = () => {
  return (
    <section className=" sm: space-y-6 sm:space-y-6 lg:space-y-14 py-16 border-b border-b-gray-500">
      {/* Header */}
      <div className="flex justify-between items-end lg:w-full">
        <div className="flex justify-between items-end gap-x-4 md:w-[60%] lg:w-[50%]">
          <div className="flex flex-col justify-between space-y-2 lg:space-y-6">
            <h4 className="lg:border-l-[20px] border-l-[#DB4444] lg:text-base lg:p-4 pr-0 text-[#DB4444] font-semibold">
              Today&apos;s
            </h4>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Flash Sales</h2>
          </div>
          <div className="flex justify-between items-center space-x-1 md:space-x-2 h-fit">
            <div className="flex flex-col justify-between">
              <span className="text-[10px] sm:text-xs font-medium">Days</span>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                03 <span className="text-[#DB4444] xl:mr-2">:</span>
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] sm:text-xs font-medium">Hours</span>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                23 <span className="text-[#DB4444] xl:mr-2">:</span>
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] sm:text-xs font-medium">Minutes</span>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                19<span className="text-[#DB4444] ml-2 xl:mr-2">:</span>
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] sm:text-xs font-medium">Seconds</span>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">56</span>
            </div>
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

      {/* Product Cards */}
      <div className="grid grid-cols-2 mx-auto sm:grid-cols-3  lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-2 xl:gap-x-8">
        {discountTagProducts.map((product) => (
          <DiscountProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            discount={product.discount}
            heading={product.heading}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
            totalRatings={product.totalRatings}
          />
        ))}
      </div>
      <div className="flex items-center justify-center"><button className="text-base font-medium text-white bg-[#DB4444] hover:bg-[#c42f2f] py-3 md:py-4 px-4 md:px-12 rounded-md">View All Products</button></div>
    </section>
  );
};

export default FlashSales;
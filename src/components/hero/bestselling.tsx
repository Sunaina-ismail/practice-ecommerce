"use client";
import React from "react";
import Image from "next/image";
import { nonDiscountedTagProducts } from "../product";
import DiscountProductCard from "../discountProduct";

const BestSelling = () => {
  return (
    <section className="pt-16 lg:pt-20">  
      <div className="mx-2 sm: space-y-6 sm:space-y-6 lg:space-y-16 pb-16 lg:pb-20 ">
      <div className="flex justify-between items-end lg:w-full">
        <div className="flex justify-between items-end gap-x-4 md:w-[60%] lg:w-[50%]">
          <div className="flex flex-col justify-between space-y-2 lg:space-y-6">
            <h4 className="lg:border-l-[20px] border-l-[#DB4444] lg:text-base lg:p-4 pr-0 text-[#DB4444] font-semibold">
            This Month
            </h4>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Best Selling Products</h2>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex items-center justify-center"><button className="text-base font-medium text-white bg-[#DB4444] hover:bg-[#c42f2f] py-3 md:py-4 px-4 md:px-12 rounded-md">View All</button></div>

      </div>


          
      {/* Product Cards */}
      <div className="grid grid-cols-2 mx-auto sm:grid-cols-3  lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-8">
        {nonDiscountedTagProducts.map((product) => (
          <DiscountProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            heading={product.heading}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
            totalRatings={product.totalRatings}
          />
        ))}
      </div>
      </div>

      <div className="sm:w-full w-full h-fit sm:ml-0 md:ml-0 lg:ml-3 md:mt-10 bg-black flex flex-col md:flex-row  items-center relative md:px-4 lg:pl-14 mt-4 lg:py-0 py-10 sm:py-5 md:py-10 gap-x-7 md:h-[400px] lg:h-[500px] gap-y-2 mx-auto">

{/* Text Section */}
<div className="flex flex-col justify-between gap-y-4 lg:gap-y-8 text-white w-[80%] lg:max-w-md">
  <div className="">
    <span className='text-[#00FF66] text-base'>Categories
</span>
  </div>
  <div className="">
  <h3 className='text-5xl font-semibold'>Enhance Your Music Experience</h3>
  </div>
<div className="flex justify-between gap-x-6 text-black max-h-[62px] w-fit">
  <div className="flex flex-col items-center bg-gray-200 rounded-full max-w-[62px] max-h-[62px] p-3 leading-tight font-semibold"><span>23</span><span className="text-xs">Hours</span></div>
  <div className="flex flex-col items-center bg-gray-200 rounded-full max-w-[62px] max-h-[62px] p-3 leading-tight font-semibold"><span>05</span ><span  className="text-xs">Days</span></div>
  <div className="flex flex-col items-center bg-gray-200 rounded-full max-w-[62px] max-h-[62px] p-3 leading-tight font-semibold"><span>59</span><span  className="text-xs">Minutes</span></div>
  <div className="flex flex-col items-center bg-gray-200 rounded-full max-w-[62px] max-h-[62px] p-3 leading-tight font-semibold"><span>35</span><span  className="text-xs">Second</span></div>
</div>
<div className="flex justify-center md:justify-start">
  <button className="text-base font-medium py-4 px-12  md:py-4  md:px-12 bg-[#00FF66] rounded-md">Buy Now!</button>
</div>
</div>

{/* Image Section */}
<div className="h-[300px] xl:h-[420px] m-4 md:m-7 content-center">
  <Image
    src={"/boombox.png"}
    width={460}
    height={400}
    alt="hero images"
    className="h-[200px] w-[496px] sm:h-[250px] sm:w-[450px] md:h-[250px] lg:w-[568px] lg:h-[330px]"
  />
</div>

</div>
    </section>
  );
};

export default BestSelling;
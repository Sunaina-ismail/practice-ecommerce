"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";

import { HiArrowPath, HiOutlineEye } from "react-icons/hi2";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";








const RelatedItems = [
    {
        id:1,
      imageSrc :"/image-1.png",
      discount : "-40%",
      heading : "HAVIT HV-G92 Gamepad",
      originalPrice : 120,
      rating : 5, 
      totalRatings : 88, 
      discountedPrice : 160,
    },
    {
        id:2,
      imageSrc :"/image-2.png",
      discount : "-35%",
      heading : "AK-900 Wired Keyboard",
      originalPrice :1160,
      rating : 4, 
      totalRatings : 75, 
      discountedPrice :  960,
    },
    {
        id:3,
      imageSrc :"/image-3.png",
      discount : "-30%",
      heading : "IPS LCD Gaming Monitor",
      originalPrice : 400,
      rating : 5, 
      totalRatings : 99, 
      discountedPrice : 370,
    },
    {
        id:4,
      imageSrc :"/image-7.png",
      heading : "RGB liquid CPU Cooler",
      originalPrice : 170,
      rating : 4.5, 
      totalRatings :65, 
      discountedPrice : 160,
    },
  ];





export default function Product() {
  const [quantity, setQuantity] = useState(1);

  // Handlers for quantity increment and decrement
  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleSubtract = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));


  const renderStars = (rating:number) => {
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

    return stars;};



  return (
    <section>
    <div className="py-6 sm:my-10 mb-10 lg:mt-20 lg:mb-40 lg:max-w-[1170px] ">
     
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image Section */}
         
             <div className=" flex flex-col-reverse lg:flex-row gap-4  lg:gap-x-16">
              {/* Thumbnails */}
              <div className=" flex lg:flex-col gap-x-2 md:gap-x-6 mx-auto lg:mx-0 lg:gap-y-4">
                <Image
                  src="/pdetails/image-1.png"
                  alt="Thumbnail 1"
                  width={150}
                  height={100}
                  className="rounded-sm  md:w-48 lg:h-[170px] lg:h[138px] cursor-pointer bg-[#F5F5F5] "
                />
                <Image
                  src="/pdetails/image-2.png"
                  alt="Thumbnail 2"
                  width={150}
                  height={100}
                  className="rounded-sm  md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
                />
                <Image
                  src="/pdetails/image-3.png"
                  alt="Thumbnail 3"
                  width={150}
                  height={100}
                  className="rounded-sm  md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
                />
                <Image
                  src="/pdetails/image-4.png"
                  alt="Thumbnail 4"
                  width={150}
                  height={100}
                  className="rounded-sm md:w-48 lg:w-[170px] lg:h-[138px] cursor-pointer bg-[#F5F5F5] "
                />
              </div>
              <div className="col-span-2 rounded-sm  bg-[#F5F5F5] w-full h-32 md:h-56 lg:w-[500px] lg:h-[600px] p-[154px_27px_131px_27px] flex justify-center items-center">
                <Image
                  src="/pdetails/image-5.png"
                  alt="Havic HV G-92 Gamepad"
                  width={250}
                  height={200}
                  className="rounded-sm md:h-[250]  lg:w-[446px] lg:h-[315px]"
                />
              </div>
            </div>
        

          {/* Right Details Section */}
          <div className="flex-1  mx-auto w-full lg:w-[399px] lg:max-h-[600px] space-y-6">
          <div className="space-y-6">
            <div className="flex flex-col justify-between gap-y-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Havic HV G-92 Gamepad
            </h1>
            <div className="flex items-center space-x-3">
            
              <div className="text-yellow-500 w-[100px] h-[20px]  text-lg flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
              
              <p className=" text-gray-600 text-sm">(350 Reviews) </p>
              <span>|</span>
              <p className=" text-[#00FF66] font-semibold text-sm">
                In Stock
              </p>
              </div>
              <p className="text-2xl text-gray-800">$192.00</p>
              </div>
           

            <p className="w-[341px] text-sm text-black ">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>

<hr className="border border-black "/>
            {/* Color Selection */}
            <div className="flex gap-x-6 ">
              <h4 className="text-gray-800 text-xl font-medium">Colours:</h4>
              <div className="flex items-center gap-2">
                <button className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white focus:ring-2 ring-black"></button>
                <button className="w-5 h-5 rounded-full bg-red-500 border-2 border-white focus:ring-2 ring-black"></button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex gap-x-6">
              <h4 className="text-gray-800 text-[20px] items-center font-medium">
                Size:
              </h4>
              <div className="flex gap-3 items-center">
                {["xs", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-2 p-1  flex items-center justify-center border rounded-md text-gray-600 border-gray-300 hover:border-gray-500 hover:bg-[#DB4444] active:bg-[#DB4444]  focus:ring-2 focus:ring-gray-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>


            {/* Quantity and Add to Cart */}

            
            <div className=" flex items-center gap-3">
              <div className="flex items-center w-[159px] h-[44px] border justify-between border-gray-300 rounded-md">
                <button
                  className="hover:bg-[#DB4444] h-full p-4 border-r border-r-gray-500 text-gray-600 "
                  onClick={handleSubtract}
                >
                  <FiMinus />
                </button>
                <input type="text" value={quantity} readOnly 
                className="w-14 px-5 py-2 items-center bg-none"
                />
                <button
                  className="  p-4 border-l h-full border-l-gray-500 hover:bg-[#DB4444]  text-gray-600 "
                  onClick={handleAdd}
                >
                  <FiPlus />
                </button>
              </div>
              <button className="px-12 py-2 bg-red-500 text-white rounded-sm hover:bg-red-600">
                Buy Now
              </button>
              <div>
                <button   className="p-2 flex items-center justify-center border rounded-md text-gray-600 border-gray-300 hover:border-[#DB4444]  text-xl focus:ring-0"><FiHeart/></button>
              </div>
            </div>

</div>
            {/* Delivery Info */}
            <div className="border-2 border-[#80808082] rounded-sm py-5 space-y-3 items-center w-full ">
              
              <div className="flex items-center gap-x-4 px-4">
                <MdOutlineLocalShipping className=" text-3xl" />
                <div className="space-y-2">
                  <span className="text-black text-[16px] font-medium">
                    Free Delivery
                  </span>
                  <p className="text-black text-[12px]">
                    Enter your postal code for Delivery Availability
                  </p>
                  </div>
              </div>
<div>
              <hr />
              </div>
              <div className="flex items-center gap-x-4  px-4">
                <HiArrowPath className="text-black text-3xl" />
                <div className="space-y-2">
                  <span className="text-vlack text-[16px] font-medium">
                    Return Delivery
                  </span>
                  <p className="text-black text-[12px]">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>

    <div>
    <div className="space-y-16">
        <div className="flex justify-between items-end lg:w-full">
          <h4 className="border-l-[20px] border-l-[#DB4444] lg:text-base p-2 lg:p-4 pr-0 text-[#DB4444] font-semibold">
           Related Items
          </h4>

        </div>

        {/* Just For You Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-2 xl:gap-x-8">
          {RelatedItems.map((product) => (
            <div
              key={product.id}
              className="relative max-w-[270px] gap-y-2 lg:gap-y-4 bg-white overflow-hidden flex flex-col"
            >
              {/* Outer Image Container */}
              <div className="relative h-[200px] md:h-[270px] lg:h-[270px] w-full bg-gray-100 flex items-center rounded-md justify-center">
                <div className="relative w-[190px] h-[120px] md:h-[180px] lg:h-[180px] flex items-center justify-center overflow-hidden">
                  <div className="sm:w-48 sm:h-44 lg:h-44 lg:w-48 flex items-center justify-center">
                    <Image
                      src={product.imageSrc}
                      alt={product.heading}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Discount/New Badge */}
                {product.discount ? (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm p-1 sm:p-2 px-2 sm:px-4 rounded">
                    {product.discount}
                  </div>
                ) : product.discount ? (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm p-1 sm:p-2 px-2 sm:px-4 rounded">
                    {product.discount}
                  </div>
                ) : null}

                {/* Hover Icon */}
                <div className="flex flex-col absolute gap-y-2 top-2 right-2">
                
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                    <HiOutlineEye className="text-xl text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <IoMdHeartEmpty className="text-xl text-gray-600" />
                </button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-0 w-full bg-black flex items-center justify-center transition-opacity duration-300">
                  <button className="text-white font-semibold text-md md:text-lg py-2 px-6 border-white hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:space-y-2">
                <h3 className="text-base font-semibold">{product.heading}</h3>
                <div className="flex items-center gap-2">
                  {product.discountedPrice ? (
                    <>
                      <span className="text-red-600 font-bold">
                        ${product.discountedPrice}
                      </span>
                      <span className="text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-800 font-bold">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              
                <div className="flex items-center gap-x-1 md:gap-x-2">
{renderStars(product.rating)}
<span className="text-sm text-gray-500">({product.totalRatings})</span>        
          </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
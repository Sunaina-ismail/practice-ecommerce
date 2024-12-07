"use client";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const Wishlist = () => {
  const mywishlistitems = [
    {
      id: 1,
      imageSrc: "/image-6.png",
      heading: "Gucci duffle bag",
      originalPrice: 1160,
    },
    {
      id: 2,
      imageSrc: "/image-7.png",
      heading: "RGB liquid CPU Cooler",
      originalPrice: 170,
    },
    {
      id: 3,
      imageSrc: "/game-pad.png",
      heading: "GP11 Shooter USB Gamepad",
      originalPrice: 660,
    },
    {
      id: 4,
      imageSrc: "/jacket.png",
      heading: "Quilted Satin Jacket",
      originalPrice: 660,
    },
  ];

  const justforyou = [
    {
      id: 1,
      imageSrc: "/laptop.png",
      heading: "ASUS FHD Gaming Laptop",
      originalPrice: 700,
      totalRatings: 65,
      discount: "-30%",
      discountedproce: 1160,
    },
    {
      id: 2,
      imageSrc: "/image-3.png",
      heading: "IPS LCD Gaming Monitor",
      originalPrice: 400,
      rating: 5,
      totalRatings: 65,
    },
    {
      id: 3,
      imageSrc: "/image-1.png",
      heading: "HAVIT HV-G92 Gamepad",
      originalPrice: 200,
      rating: 5,
      totalRatings: 65,
      isnew: true,
    },
    {
      id: 4,
      imageSrc: "/image-2.png",
      heading: "AK-900 Wired Keyboard",
      originalPrice: 1160,
      rating: 5,
      totalRatings: 65,
    },
  ];

  return (
    <section className="max-w-[1170px] mt-20 mx-2 sm:mx-6 lg:mx-auto space-y-20">
      {/* Wishlist Section */}
      <div className="space-y-16">
        <div className="w-full flex justify-between">
          <h4 className="text-xl">
            Wishlist <span>(4)</span>
          </h4>
          <button className="font-medium text-black border border-black py-3 px-4 sm:px-8 md:px-12 md:py-4 content-end rounded hover:bg-red-600 hover:text-white">
            Proceed to Checkout
          </button>
        </div>

        {/* Wishlist Cards */}
        <div className="grid grid-cols-2 mx-auto sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-2 xl:gap-x-8">
          {mywishlistitems.map((item) => (
            <div
              key={item.id}
              className="relative max-w-[270px] gap-y-2 lg:gap-y-4 bg-white overflow-hidden flex flex-col"
            >
              {/* Outer Image Container */}
              <div className="relative h-[200px] md:h-[270px] lg:h-[270px] w-full bg-gray-100 flex items-center rounded-md justify-center">
                {/* Inner Image Container */}
                <div className="relative w-[190px] h-[120px] md:h-[180px] lg:h-[180px] flex items-center justify-center overflow-hidden">
                  <div className="sm:w-48 sm:h-44 lg:h-44 lg:w-48 flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.heading}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Hover Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button className="bg-white group hover:bg-red-600 p-2 rounded-full shadow-md">
                    <RiDeleteBin6Line className="text-xl text-black group-hover:text-white" />
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
                <h3 className="text-base font-semibold">{item.heading}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 font-bold">
                    ${item.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Just For You Section */}
      <div className="space-y-16">
        <div className="flex justify-between items-end lg:w-full">
          <h4 className="lg:border-l-[20px] border-l-[#DB4444] lg:text-base lg:p-4 pr-0 text-[#DB4444] font-semibold">
            This Month
          </h4>
          <div className="flex items-center justify-center">
            <button className="text-base font-medium text-black hover:bg-[#DB4444] hover:text-white py-3 md:py-4 px-4 md:px-12 rounded-sm border border-black">
              View All
            </button>
          </div>
        </div>

        {/* Just For You Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-2 xl:gap-x-8">
          {justforyou.map((product) => (
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
                {product.isnew ? (
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs md:text-sm p-1 sm:p-2 px-2 sm:px-4 rounded">
                    New
                  </div>
                ) : product.discount ? (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm p-1 sm:p-2 px-2 sm:px-4 rounded">
                    {product.discount}
                  </div>
                ) : null}

                {/* Hover Icon */}
                <div className="absolute top-2 right-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                    <HiOutlineEye className="text-xl text-gray-600" />
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
                  {product.discountedproce ? (
                    <>
                      <span className="text-red-600 font-bold">
                        ${product.discountedproce}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
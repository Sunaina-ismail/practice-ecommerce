import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="mx-2 space-y-6 lg:space-y-16 pb-16 lg:pb-20">
 
        <div className="flex flex-col justify-between space-y-2 lg:space-y-6">
          <h4 className="lg:border-l-[20px] border-l-[#DB4444] lg:text-base lg:p-4 pr-0 text-[#DB4444] font-semibold">
            Featured
          </h4>
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            New Arrival
          </h2>
        </div>

        {/* Main Container */}
        <div className="flex flex-col md:flex-row gap-[30px]">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 bg-black text-white px-5 relative">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/playstation.png"
                alt="PlayStation 5"
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-col items-start gap-y-4 justify-end p-4 lg:p-6 text-white">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  PlayStation 5
                </h4>
                <p className="text-xs sm:text-sm lg:text-base">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-sm font-medium underline hover:font-bold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[30px]">
            {/* Upper Div */}
            <div className="flex gap-[30px] h-[300px]">
              <div className="relative w-full">
                <Image
                  src="/attractive-woman.png"
                  alt="Women's Collection"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
                <div className="absolute inset-0 flex flex-col gap-y-4 items-start justify-end p-4 lg:p-6 text-white">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">
                    Women&apos;s Collection
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base">
                    Featured woman collections that give you another vibe.
                  </p>
                  <button className="text-sm font-medium underline hover:font-bold">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Lower Divs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] h-auto">
              {/* Left Lower Div */}
              <div className=" relative bg-black p-4">
                <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[300px]">
                  <Image
                    src="/amazon-echo.png"
                    alt="Speakers"
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-start gap-y-2 justify-end p-4 lg:p-6 text-white">
                  <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">
                    Speakers
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base">
                    Amazon wireless speakers.
                  </p>
                  <button className="text-sm font-medium underline hover:font-bold">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Right Lower Div */}
              <div className="relative bg-black p-4">
                <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[300px]">
                  <Image
                    src="/gucci-base.png"
                    alt="Premium Bags"
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-start justify-end gap-y-2 p-4 lg:p-6 text-white">
                  <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">
                    Perfume
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base">
                    GUCCI INTENSE OUD EDP.
                  </p>
                  <button className="text-sm font-medium underline hover:font-bold">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </section>
  );
};

export default FeaturedProducts;
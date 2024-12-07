import Image from "next/image"
import Link from 'next/link';
import {FaApple, FaArrowRight } from "react-icons/fa";
import Exclusive from "../sideExclusive";
function Hero(){
    return(
<div className="md:flex justify-between w-full gap-x-11 mb-15 md:mb-20 lg:mb-16">
  {/* Exclusive Component - Positioned with Border */}
  <div className="sm:hidden md:block md:pt-10 md:border-r w-[24%] lg:w-[25%] md:pr-4">
    <Exclusive />
  </div>

  {/* Main Content with Image and Text */}
  <div className="sm:w-full w-full h-full sm:ml-0 md:ml-0 lg:ml-3 md:mt-10 bg-black flex justify-between items-center relative px-2 md:px-4 xl:pl-16 mt-4 lg:py-0 py-10 sm:py-5 md:py-10">

    {/* Text Section */}
    <div className=" text-white w-[250px] sm:w-[200px] md:w-[280px] lg:w-[280px] pt-4 ml-2 md:ml-5 relative inset-0 space-y-2 md:py-3 lg:space-y-5">
      <div className="flex gap-x-2 lg:gap-x-6 items-center">
        <span><FaApple className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl" /></span>
        <span className='sm:text-xs md:text-sm'>iPhone 14 Series</span>
      </div>
      <div className="space-y-2 lg:space-y-5">
      <h1 className='text-xl md:text-4xl lg:text-5xl font-semibold lg:my-5 lg:leading-[60px]'>Up to 10% off Voucher</h1>
      <Link href={"#products"} className='underline underline-offset-4 hover:font-bold flex items-center gap-4 p-'>
        Shop Now <FaArrowRight/>
      </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="h-full">
      <Image
        src={"/hero-iphone.png"}
        width={460}
        height={400}
        alt="hero images"
        className="h-[200px] w-[496px] sm:h-[250px] sm:w-[350px] md:h-[200px] lg:w-[496px] lg:h-[344px]"
      />
    </div>

  </div>
</div>


    )
}
export default Hero;
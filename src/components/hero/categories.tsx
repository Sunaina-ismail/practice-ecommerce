import React from 'react'
import { CiCamera, CiMobile3 } from 'react-icons/ci'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { LuGamepad } from 'react-icons/lu'
import { PiHeadphones } from 'react-icons/pi'
import { TbDeviceWatchStats } from 'react-icons/tb'

const Categories = () => {
  const category = [{
    icon: <CiMobile3 className='text-4xl sm:text-5xl md:text-6xl'/>,
    heading: "Phone"
  },
  {
    icon: <HiOutlineComputerDesktop className='text-4xl sm:text-5xl md:text-6xl'/>,
    heading: "Computer"
  },{
    icon: <TbDeviceWatchStats className='text-4xl sm:text-5xl md:text-6xl'/>,
    heading: "SmartWatch"
  },{
    icon: <CiCamera className='text-4xl sm:text-5xl md:text-6xl'/>,
    heading: "Camera"
  },{
    icon: <PiHeadphones className='text-4xl sm:text-5xl md:text-6xl'/>,
    heading: "Headphones"
  },{
    icon: <LuGamepad className='text-4xl sm:text-5xl md:text-6xl'/>,
    heading: "Gaming"
  },
]
  return (
    <section className="space-y-6 sm:space-y-6 lg:space-y-20 py-16 lg:py-20 border-b border-b-gray-500">
            <div className="flex justify-between items-end lg:w-full">
        <div className="flex justify-between items-end gap-x-4 md:w-[60%] lg:w-[50%]">
          <div className="flex flex-col justify-between space-y-2 lg:space-y-6">
            <h4 className="lg:border-l-[20px] border-l-[#DB4444] lg:text-base lg:p-4 pr-0 text-[#DB4444] font-semibold">
            Categories
            </h4>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Browse By Category</h2>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-between xl:space-x-2">
          <span className="bg-gray-100 p-2 rounded-full">
            <FaArrowRight className="text-base sm:text-xl lg:text-2xl" />
          </span>
          <span className="bg-[#F5F5F5] p-2 rounded-full">
            <FaArrowLeft className="text-base sm:text-xl lg:text-2xl" />
          </span>
        </div>
      </div>
      
        <div className="grid  mx-auto grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-2 lg:gap-x-5">
          {category.map((item,index)=>(
  <div key={index} className='flex flex-col items-center justify-evenly border border-gray-500 group hover:bg-[#DB4444] text-black hover:text-white py-3 px-7 gap-y-2  md:py-6 md:px-14 md:gap-y-4 rounded lg:max-w-[170px]'>
{item.icon}
  <h5 className='text-base font-medium'>{item.heading}</h5>
          </div>
          ))}
        </div>
    </section>
  )
}

export default Categories
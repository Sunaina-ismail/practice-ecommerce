import React from 'react'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { PiHeadsetFill } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'

const Card = () => {
  return (
      <div className="w-full flex justify-center items-center">
      <div className="w-full sm:w-full lg:w-[943px] h-auto flex flex-col sm:flex-row lg:flex-row justify-center gap-y-6 sm:gap-y-8 lg:gap-x-8 lg:justify-evenly items-center">
        
        <div className="w-full sm:w-[249px] lg:w-[249px] h-[161px] flex justify-center items-center flex-col gap-y-6">
          <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <TbTruckDelivery className="text-3xl text-white pt-2" />
          </div>
          <div>
            <h1 className="text-[14px] sm:text-[16px] font-bold text-center">FREE AND FAST DELIVERY</h1>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-center">Free delivery for all orders below $140</p>
          </div>
        </div>
        
        <div className="w-full sm:w-[249px] lg:w-[249px] h-[161px] flex justify-center items-center flex-col gap-y-6">
          <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <PiHeadsetFill className="text-3xl text-white pt-2" />
          </div>
          <div>
            <h1 className="text-[14px] sm:text-[16px] font-bold text-center">24/7 CUSTOMER SERVICE</h1>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-center">Friendly 24/7 customer support</p>
          </div>
        </div>
        
        <div className="w-full sm:w-[249px] lg:w-[249px] h-[161px] flex justify-center items-center flex-col gap-y-6">
          <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <AiOutlineSafetyCertificate className="text-3xl text-white pt-2" />
          </div>
          <div>
            <h1 className="text-[14px] sm:text-[16px] font-bold text-center">MONEY BACK GUARANTEE</h1>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-center">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Card;
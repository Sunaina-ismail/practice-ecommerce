"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  FiUser } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { TiStarOutline } from 'react-icons/ti';
import { TbLogout2 } from 'react-icons/tb';
import { RiShoppingBag3Line } from 'react-icons/ri';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/components/contact' },
    { name: 'Sign Up', path: '/components/signup' },
  ];



  return (
    <header className="flex flex-col w-full gap-y-3 sm:gap-y-5 lg:gap-y-10 pb-2 lg:pb-4 border-b">
      <div className="flex flex-col w-full md:items-center lg:items-end bg-black px-4 sm:px-[50px]  md:px-[10px] lg:px-[90px] xl:px-[135px] h-12 py-2 xl:py-3">
        <div className="flex justify-between items-center md:gap-x-37 lg:gap-x-40 xl:gap-x-60 text-white">
          <div className="flex items-center gap-x-2">
            <p className="font-mono hidden sm:block text-xs md:text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <span className="inline sm:hidden text-sm">Summer Sale - 50% OFF!</span>
            <Link href="/" className="font-semibold border-b text-xs md:text-sm">
              ShopNow
            </Link>
          </div>
          <select className="bg-black p-1 text-xs md:text-sm">
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>

      <nav className=" w-full px-2 lg:px-0 lg:mx-auto lg:max-w-[1170px] flex items-center justify-between h-10 gap-x-7 sm:gap-x-10 lg:gap-x-28 xl:gap-x-32">
        <div className='flex items-center justify-between md:hidden gap-x-2'>
          <span
            className=" bg-black p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <FaBars className="size-4 text-white" />
          </span>
          <h1 className="w-fit text-2xl font-bold">Exclusive</h1>
        </div>
        <div className="flex items-center justify-between md:gap-x-20  xl:gap-x-40">
          <h1 className="hidden md:block  w-fit text-xl lg:text-2xl font-bold">Exclusive</h1>

          <ul className="hidden md:flex items-center justify-between md:gap-x-8 lg:gap-x-12">
            {navLinks.map((link, index) => (
              <li key={index} className="p-1">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-x-4 md:gap-x-1 lg:gap-x-5 xl:gap-x-6 h-full">
          <div className="hidden sm:block bg-[#F5F5F5] pl-3 xl:pl-5 pr-2 xl:pr-3 py-2">
            <div className="flex items-center justify-between gap-x-10 md:gap-x-5 xl:gap-x-8 bg-[#F5F5F5] h-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className=" bg-[#F5F5F5] text-xs p-1 focus:ring-0 focus:border-none focus:outline-none"
              />
              <span>
                <HiMiniMagnifyingGlass className="text-2xl md:text-xl lg:text-2xl" />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-4 md:gap-1 lg:gap-x-2">
            <span className="p-1 pr-0">
             <Link href={"/components/wishlist"}><IoMdHeartEmpty className="text-2xl md:text-xllg:text-2xl" /></Link>
            </span>
            <span className="p-1 lg:p-3 pr-0">
            <Link href={"/components/cart"}><IoCartOutline className="text-2xl md:text-xl lg:text-2xl" /></Link>
            </span>
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger>
            <div className="p-1 border-none lg:p-3 rounded-full md:p-2 hover:bg-[#DB4444] active:bg-[#DB4444] active:text-white hover:text-white">
              <LuUser className="text-2xl md:text-xl lg:text-2xl" />
            </div>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent className="bg-[#434343] bg-opacity-4 text-white py-5 px-3 lg:px-5 rounded-md shadow-lg z-50">
            <Link href={"/components/account"}><DropdownMenuItem className="focus:bg-none hover:bg-none active:bg-none flex items-center gap-3">
              <FiUser className="text-xl" />
              <span className='text-sm focus:bg-none hover:bg-none active:bg-none'>Manage My Account</span>
            </DropdownMenuItem></Link>
            <DropdownMenuItem className="flex text-3xl items-center gap-4">
              <RiShoppingBag3Line

                className="text-xl" />
              <span className='text-sm'>My Orders</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
              <MdOutlineCancel  className="text-xl" />
              <span className='text-sm'>My Cancellations</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
              <TiStarOutline
               className="text-xl" />
              <span className='text-sm'>My Reviews</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-4">
              <TbLogout2 className="text-xl" />
              <span className='text-sm'>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </div>
          
         
       
        </div>
        
      </nav>

      <div className="block sm:hidden bg-[#F5F5F5] mx-2 p-2">
        <div className="flex items-center justify-between gap-x-10 bg-[#F5F5F5] h-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className=" bg-[#F5F5F5] text-xs p-1 focus:ring-0 focus:border-none focus:outline-none"
          />
          <span>
            <HiMiniMagnifyingGlass className="text-2xl md:text-xl lg:text-2xl" />
          </span>
        </div>
      </div>

      {/* Mobile Menu and Overlay */}
      {isMenuOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={() => setIsMenuOpen(false)}
    />
    {/* Mobile Menu */}
    <div
      className={`absolute top-0 left-0 h-screen w-[70%] bg-white shadow-lg flex flex-col px-6 py-10 z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-2xl text-black"
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close menu"
      >
        <MdOutlineCancel className="text-3xl" />
      </button>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-y-6 font-medium text-lg">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Extra Links or Content */}
      <div className="mt-10">
        <p className="text-sm text-gray-500">
          <strong>Need Help?</strong> Contact us anytime!
        </p>
      </div>
    </div>
  </>
)}
    </header>
  );
};

export default Header;
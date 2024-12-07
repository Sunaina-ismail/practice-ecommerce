import Image from "next/image";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-6 lg:py-12 mt-16 sm:mt-16 md:mt-24 lg:mt-44">
      <div className="max-w-[1170px]  mx-auto space-y-4 lg:space-y-10 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:mx-2 xl:mx-0 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 lg:gap-y-0 lg:gap-x-16 xl:gap-x-20">
          {/* Exclusive Section */}
          <div>
            <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <h4 className="font-bold text-2xl">Exclusive</h4>
            <h4 className="font-semibold text-xl">Subscribe</h4>
            <p className=" text-white">
              Get 10% off your first order
            </p>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-4 w-[60%] lg:w-full px-4 py-3 rounded-sm text-gray-400 bg-transparent border border-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <h4 className="font-bold text-2xl">Support</h4>
            <div className="flex flex-col gap-y-4">
            <p className=" text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-white">exclusive@gmail.com</p>
            <p className="text-white">+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <div>
            <h4 className="font-bold text-2xl">Account</h4>
            </div>
            <ul className="space-y-3 text-white">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
          <div>
            <h4 className="font-bold text-2xl">Quick Link</h4>
            </div>
            <ul className="space-y-4 text-white">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <div>
              <h4 className="font-bold text-2xl">Download App</h4>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="mt-2 text-white">Save $3 with App New User Only</p>
              {/* Outer Grid for QR Code and App Links */}
              <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 w-[60%] lg:w-full">
                {/* QR Code */}
                <div>
                  <Image
                    src="/Qr Code.png"
                    alt="QR Code"
                    width={80}
                    height={40}
                    className="w-40 h-24"
                  />
                </div>
                {/* App Store Links */}
                <div className="grid grid-cols-1 gap-2">
                  <Image
                    src="/google-download.png"
                    alt="Google Play"
                    width={160}
                    height={80}
                    className="w-40 h-10"
                  />
                  <Image
                    src="/download-appstore.png"
                    alt="App Store"
                    width={160}
                    height={80}
                    className="w-40 h-10"
                  />
                </div>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4">
            <RiFacebookLine size={30}/>
            <CiTwitter  size={30}/>
            <IoLogoInstagram  size={30}/>
            <FaLinkedinIn  size={30}/>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center text-gray-500 ">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
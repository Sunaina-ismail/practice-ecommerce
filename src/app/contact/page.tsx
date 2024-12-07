import React from "react";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";

const Contact = () => {
  return (
    <section className="max-w-[1170px] bg-white my-10 px-4 lg:px-0 lg:mt-20 lg:mb-36  mx-auto">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3  gap-7">
        {/* Left Section */}
        <div className="space-y-6 shadow-md py-12 px-8 gap-y-8 rounded-md sm:w-[70%] lg:w-full">        
            <div className="flex flex-col gap-y-6">
                <div className="flex  items-center gap-x-4">
                    <div className="bg-red-500 text-2xl p-2 rounded-full">
              <FiPhone className="text-white"/>
            </div>
            <h4 className="font-medium text-base">Call To Us</h4>
            </div>
             
              <p className="text-black">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-black ">Phone: +880611112222</p>
            </div>
          
          <hr  className=" border border-black"/>

            {/* bottom  */}
            <div className="flex flex-col  gap-y-6">
               
                <div className="flex  items-center gap-x-4">
                    <div className="bg-red-500 text-2xl p-2 rounded-full">
              <RxEnvelopeClosed className="text-white"/>
            </div>
              <h4 className="font-medium text-base">Write To Us</h4>
              </div>
              <p className="text-black">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-black">
                Emails: customer@exclusive.com
              </p>
              <p className="text-black">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
      


        {/* Right Section */}
        <div className="bg-white shadow-md px-7 py-10 rounded-md md:w[70%] lg:w-[760px]">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Your Name *"
                className="border  bg-[#F5F5F5] p-3 focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border bg-[#F5F5F5] p-3 focus:outline-none focus:border-red-500"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="border bg-[#F5F5F5] p-3 focus:outline-none focus:border-red-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={8}
              className="w-full border bg-[#F5F5F5] p-3 focus:outline-none focus:border-red-500"
            ></textarea>
            <div className="w-full justify-end flex">
            <button
              type="submit"
              className="bg-red-500 text-white px-12 py-4 content-end rounded-md hover:bg-red-600"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
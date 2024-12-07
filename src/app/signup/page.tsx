"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
    const [login, setLogin] = useState(false)

  return (
    <div className='flex flex-col md:flex-row lg:max-w-[1305px] items-center justify-between py-16 lg:pb-36'>
  {/* Left Section for Image */}
  <div className='w-full bg-[#CBE4E8] content-end h-[300px] md:h-[781px] m:w-[500px] lg:w-[805px] lg:h-[781px] mb-12 lg:mb-0'>
    <Image 
      src={'/beatsnoop 1.png'} 
      alt='sign-image' 
      width={219} 
      height={206} 
      className='lg:rounded-tr-[4px] lg:rounded-br-[4px] w-full h-full' 
    />
  </div>

  {/* Right Section for Form */}
{!login &&( <div className='w-full md:w-[371px] md:h-[530px] flex flex-col gap-y-4 lg:gap-y-12 p-4 justify-center'>
    
    {/* Heading and Description */}
    <div className='flex flex-col gap-4 lg:gap-6'>
      <h1 className='text-2xl lg:text-4xl font-medium'>Create an account</h1>  
      <p className='text-sm lg:text-base'>Enter your details below.</p>  
    </div>

    {/* Form */}
    <form className='flex flex-col w-full gap-y-6 lg:gap-y-10'>
      <input 
        type="text" 
        placeholder='Name' 
        className='py-2 text-base border-b border-black focus:outline-none'
      />
      
      <input 
        type="text" 
        placeholder='Email or Phone Number' 
        className='py-2 text-base border-b border-black focus:outline-none'
      />
      
      <input 
        type="password" 
        placeholder='Password' 
        className='py-2 text-base border-b border-black focus:outline-none'
      />
      
      <button className='py-4 text-white rounded bg-red-500'>
        Create Account
      </button>
    </form>

    {/* Google Sign In and Login Link */}
    <div className='w-full flex flex-col gap-y-4 lg:gap-y-[16px]'> 
    <Link href={"/"}>
  <button className='w-full py-4 rounded border border-gray-500 flex items-center justify-center gap-4'>
    <Image src={'/google.jpg'} alt='google-img' width={40} height={10} className='rounded-full' />
    <span>Sign In with Google</span>
  </button>
</Link>

      <p className='flex items-center justify-center gap-x-4'>Already have an account? <button  onClick={()=>setLogin(true)}>Log In</button></p>
     
        
    </div>
  </div>
)}
  {login && (<div className='w-full lg:w-[371px] lg:h-[326px] flex flex-col gap-y-4 lg:gap-y-12 p-4 justify-center'>
        {/* Heading and Description */}
        <div className='flex flex-col gap-4 lg:gap-6'>
          <h1 className='text-2xl lg:text-4xl font-medium'>Log In to Exclusive</h1>  
          <p className='text-sm lg:text-base'>Enter your details below.</p>  
        </div>
    
        {/* Form */}
        <form className='flex flex-col w-full gap-y-6 lg:gap-y-10'>
          <input 
            type="text" 
            placeholder='Email or Phone Number' 
            className='py-2 text-base border-b border-black focus:outline-none'
          />
          
          <input 
            type="password" 
            placeholder='Password' 
            className='py-2 text-base border-b border-black focus:outline-none'
          />
     <div className='flex lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0'>
          <Link href={"/"}><button className='w-[120px] h-[45px] py-2 text-white rounded bg-red-500 text-base'>
            Log In
          </button>
          </Link>
          <p className='text-[#DB4444]'>Forget Password?</p>
        </div>
  
        </form>
    
          
        </div> )}
</div>

  );
};

export default SignUp;
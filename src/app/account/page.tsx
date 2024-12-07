import React from 'react'

const MyAccount = () => {
  return (
   <section className='mx-2  lg:mx-auto w-[95%] sm:w-[70%] lg:w-[1000px] xl:w-[1170px] pt-16 lg:pt-20'>
    <div className='grid lg:grid-cols-4 text-black gap-x-24'>
        {/* account  */}
        <div className='hidden lg:flex col-span-1 flex-col gap-y-4'>
        <div className='flex flex-col gap-y-4'>
            <h4 className='text-base font-medium'>Manage My Account</h4>
        <div className='flex flex-col items-center gap-y-2 text-gray-500'>
            <p className='text-[#DB4444]'>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
            </div>
            </div>

            {/* order  */}
        <div className='flex flex-col '>

            <h4 className='text-base font-medium'>My Orders</h4>
            <div  className='flex flex-col items-center gap-y-2 text-gray-500'>
            <p>My Returns</p>
            <p>My Cancellations</p>
            </div>
        </div>
        <div>
            <h4 className='text-base font-medium'>My Wishlist</h4>
        </div>
        </div>


{/* profile  */}

<div className='col-span-3 rounded shadow-md sm:shadow-lg px-6 py-10 sm:px-20  space-y-4'>
<h4 className='text-[#DB4444] text-xl font-medium'>Edit Your Profile</h4>

<form className='space-y-6'>
        {/* fullname  */}
    <div className=' sm:w-full flex flex-col sm:flex-row items-center gap-y-6 sm:gap-y-0 gap-x-4 sm:gap-x-12'> 
        <div className='flex flex-col gap-2 w-full'>
        <label htmlFor="First Name">First Name</label>
        <input type="text" placeholder='Md' className='p-3 bg-[#F5F5F5] text-gray-400'/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
        <label htmlFor="Last Name">Last Name</label>
        <input type="text" placeholder='Rimel' className='p-3 bg-[#F5F5F5] text-gray-400'/>
        </div>
    </div>

    {/* Email  */}
    <div className='sm:w-full flex flex-col sm:flex-row items-center gap-y-6 sm:gap-y-0 gap-x-4 sm:gap-x-12'> 
        <div className='flex flex-col gap-2 w-full'>
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder='rimel1111@gmail.com' className='p-3 bg-[#F5F5F5] text-gray-400'/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
        <label htmlFor="Last Name">Address</label>
        <input type="text" placeholder='Kingston, 5236, United State' className='p-3 bg-[#F5F5F5] text-gray-400'/>
        </div>
    </div>


{/* password  */}
<div className='flex flex-col gap-y-6 w-full'>
    <div className='flex flex-col gap-y-2 w-full'>
    <label htmlFor="Password Changes">Password Changes</label>  
    <input type="password" placeholder='Current Password' className='p-3 bg-[#F5F5F5] text-gray-400'/>
    </div>
    <input type="password" placeholder='Current Password' className='p-3 bg-[#F5F5F5] text-gray-400'/>
    <input type="password" placeholder='Current Password' className='p-3 bg-[#F5F5F5] text-gray-400'/>
    <div className='flex items-center justify-end gap-x-4'>
    <button className="  text-black ">
                  Cancle
                </button>
                <button className=" md:px-12 md:py-4 px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Save Changes
                </button>
    </div>
</div>

</form>
</div>

    </div>
   </section>
  )
}

export default MyAccount
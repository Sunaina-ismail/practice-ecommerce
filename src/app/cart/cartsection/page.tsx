import Image from "next/image";

export default function BillingCheckout() {

    const billingItem = [
        { id: 1, name: "Hi Gamepad", price: 550, image: "/image-1.png" },
         { id: 2, name: "LCD Monitor", price: 650, image: "/image-3.png" },
    ]
    return (
      <div className=" py-10">
        <div className="mx-auto w-[95%] lg:max-w-[1170px] px-4 lg:px-0"> 
          <h1 className="text-4xl font-medium mb-6">Billing Details</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
            <div>
            {/* Left Billing Section */}           
              <form className="space-y-4  md:w-[470px]">
                {/* First Name */}
                <div className="space-y-1">
                  <label className="block  text-gray-400 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                
                  />
                </div>
  
                {/* Company Name */}
                <div className="space-y-1">
                  <label className="block text-gray-400 mb-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                    
                  />
                </div>
  
                {/* Street Address */}
                <div className="space-y-1">
                  <label className="block text-gray-400 mb-1">Street Address</label>
                  <input
                    type="text"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                   
                  />
                </div>
  
                {/* Apartment */}
                <div className="space-y-1">
                  <label className="block text-gray-400 mb-1">
                    Apartment, Suite, etc. (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                   
                  />
                </div>
  
                {/* Town/City */}
                <div className="space-y-1">
                  <label className="block text-gray-400 mb-1">Town/City</label>
                  <input
                    type="text"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                   
                  />
                </div>
  
                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-gray-400 mb-1">Phone Number</label>
                  <input
                    type="text"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                   
                  />
                </div>
  
                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-[#F5F5F5] p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                   
                  />
                </div>
  
                {/* Save Info */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="h-4 w-4 bg-[#DB4444] focus:ring-2  focus:ring-[#DB4444]"
                  />
                  <label htmlFor="save-info" className="text-black">
                    Save this information for faster checkout next time
                  </label>
                </div>
              </form>
              
            </div>
  
            {/* Right Order Summary */}
            <div className="md:w-[527px] space-y-8 pt-8">

                {/* image div  */}
<div className="flex flex-col gap-y-8 md:w-[452px]">
            {billingItem.map((item) => (
          <div
            key={item.id}
            className="flex justify-between"
          >
            {/* Product */}
            <div className="flex gap-x-2 sm:gap-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={20}
                height={20}
                className="w-10 md:w-10"
              />
              <span>{item.name}</span>
            </div>

            {/* Price */}
            <span>${item.price}</span>


          </div>
        ))}
        </div>

        
                
               
  
                {/* Subtotal */}
                <div className=" space-y-4  w-full md:w-[452px]">
                <div className="flex justify-between pb-4 border-b border-b-black">
                  <p className="text-black">Subtotal</p>
                  <p >$700</p>
                </div>
  
                {/* Shipping */}
                <div className="flex justify-between pb-4 border-b border-b-black">
                  <p className="text-black">Shipping</p>
                  <p>free</p>
                </div>
  
                {/* Total */}
                <div className="flex justify-between">
                  <p className=" text-black">Total</p>
                  <p >$720</p>
                </div>
                </div>
  
                {/* Payment Method */}

                {/* 01 */}
                  <div className="flex items-center justify-between   md:w-[452px]">
                    <div className="flex items-center space-x-2 md:w-[452px]">
                    <input
                      type="radio"
                      id="bank-transfer"
                      name="payment-method"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-red-400"
                    />
                    <label htmlFor="bank-transfer" className="text-black">
                      Bank Transfer
                    </label>
                    </div>
                    <div className="flex gap-x-4 md:w-[452px]">
                        <Image src={"/bank-1.png"} alt="bank-1" width={40} height={40}></Image>
                        <Image src={"/bank-2.png"} alt="bank-2"  width={40} height={40}></Image>
                        <Image src={"/bank-3.png"} alt="bank-3"  width={40} height={40}></Image>
                        <Image src={"/bank-4.png"} alt="bank-4"  width={40} height={40}></Image>
                    </div>
                  </div>

{/* 02 */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="payment-method"
                      className="h-4 w-4 border-black focus:ring-2 text-red-600"
                    />
                    <label htmlFor="cash-on-delivery">
                      Cash on Delivery
                    </label>
                  </div>
              
  
                {/* Coupon Code */}
                <div className="flex items-center md:w-full gap-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  <button className="px-4 py-3 md:px-12 md:py-4 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Apply Coupon
                  </button>
                </div>
  
                {/* Place Order */}
                
                <button className=" md:px-12 md:py-4 px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Place Order
                </button>
                
              </div>
            </div>
        </div>
      </div>
    );
  }
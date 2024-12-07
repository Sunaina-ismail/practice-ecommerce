"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/image-3.png" },
    { id: 2, name: "LCD Monitor", price: 550, quantity: 2, image: "/image-1.png" },
  ]);

  const updateQuantity = (id:number, action: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="max-w-[1170px] my-20 md:my-36 mx-3 md:mx-auto space-y-20">
      <div className="w-full space-y-6">
        {/* Table Header */}
        <div className="flex justify-between px-4 md:px-10 pl-10 md:pl-24 py-6 shadow-md">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between px-4 md:px-10 py-6 shadow-md"
          >
            {/* Product */}
            <div className="flex gap-x-2 sm:gap-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={40}
                height={20}
                className="w-10 md:w-16"
              />
              <span>{item.name}</span>
            </div>

            {/* Price */}
            <span>${item.price}</span>

            {/* Quantity */}
            <span className="flex items-center gap-x-2 border-2 md:py-2 px-2 sm:px-4 rounded">
              <span>{item.quantity}</span>
<div className="flex flex-col">
              <button onClick={() => updateQuantity(item.id, "decrement")}>
                <FaAngleDown />
              </button>
              <button onClick={() => updateQuantity(item.id, "increment")}>
                <FaAngleUp />
              </button>
              </div>
            </span>

            {/* Subtotal */}
            <span>${item.price * item.quantity}</span>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <Link href={"/"}><button className="font-medium py-4 px-12 border border-black rounded">
            Return to Shop
          </button>
          </Link>
          <button className="font-medium py-4 px-12 border border-black rounded">
            Update Cart
          </button>
        </div>
      </div>

      {/* Coupon and Cart Total */}
      <div className="flex flex-col items-start md:flex-row md:gap-x-20 lg:gap-x-40 gap-y-4 lg:gap-y-0">
        {/* Coupon */}
        <div className="flex items-center gap-x-6">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border-black border focus:border-none focus:ring-1 focus:ring-[#DB4444] px-6 py-4 rounded w-[260px] sm:w-[300px]"
          />
          <button className="bg-[#DB4444] text-white px-4 sm:px-6 lg:px-10 py-4 content-end rounded-md hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="flex flex-col w-full sm:w-[470px] py-8 px-6 gap-y-6 border-2 border-black rounded-md">
          <div>
            <h1 className="text-xl font-medium">Cart Total</h1>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <div>
              <Link href={"/components/cart/cartsection"}><button className="bg-[#DB4444] text-white px-8 md:px-12 py-4 content-end rounded-md hover:bg-red-600">
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
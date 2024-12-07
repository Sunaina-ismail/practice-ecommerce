import { PCard } from "./discountProduct";

export const Products: PCard[] = [
    {
        id:1,
      imageSrc :"/image-1.png",
      discount : "-40%",
      heading : "HAVIT HV-G92 Gamepad",
      originalPrice : 200,
      rating : 5, 
      totalRatings : 88, 
      discountedPrice : 160,
    },
    {
        id:2,
      imageSrc :"/image-2.png",
      discount : "-35%",
      heading : "AK-900 Wired Keyboard",
      originalPrice :1160,
      rating : 4, 
      totalRatings : 75, 
      discountedPrice :  960,
    },
    {
        id:3,
      imageSrc :"/image-3.png",
      discount : "-30%",
      heading : "IPS LCD Gaming Monitor",
      originalPrice : 400,
      rating : 5, 
      totalRatings : 99, 
      discountedPrice : 370,
    },
    {
        id:4,
      imageSrc :"/image-4.png",
      discount : "-25%",
      heading : "S-Series Comfort Chair ",
      originalPrice : 375,
      rating : 4.5, 
      totalRatings : 99, 
      discountedPrice : 400,
    },
    {
        id:5,
      imageSrc :"/image-5.png",
      heading : "The north coat",
      originalPrice : 360,
      rating :5, 
      totalRatings : 65, 
      discountedPrice :260,
    },
    {
        id:6,
      imageSrc :"/image-6.png",
      heading : "Gucci duffle bag",
      originalPrice : 1160,
      rating : 4.5, 
      totalRatings : 65, 
      discountedPrice : 960,
      isWishList :true
    },
    {
        id:7,
      imageSrc :"/image-7.png",
      heading : "RGB liquid CPU Cooler",
      originalPrice : 170,
      rating : 4.5, 
      totalRatings :65, 
      discountedPrice : 160,
    },
    {
      id:8,
    imageSrc :"/image-8.png",
    heading : "Small BookSelf",
    originalPrice : 360,
    rating : 5, 
    totalRatings : 65, 
  },
  
    ];


 export   const discountTagProducts = Products.filter(
      product => product.discount
    );

export  const nonDiscountedTagProducts = Products.filter(
      product => !product.discount
    );
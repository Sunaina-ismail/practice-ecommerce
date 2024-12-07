import React from 'react'
import Hero from './hero'
import FeaturedProducts from './featured'
import FlashSales from './flashsales'
import Categories from './categories'
import Card from './card'
import BestSelling from './bestselling'
import ProductList from './Ourproduct'
        
        const LandingPage = () => {
          return (
           <>
           <Hero/>
           <FlashSales/>
           <Categories/>
           <BestSelling/>
           <ProductList/>
           <FeaturedProducts/>
           <Card/>
           </>
          )
        }
        
        export default LandingPage
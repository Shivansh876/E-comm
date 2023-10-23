import React from 'react'
import Slider from '../components/HomePage/Slider'
import Categories from '../components/HomePage/Categories'
import Products from '../components/HomePage/Products'
import Newsletter from '../components/HomePage/Newsletter'
import OurServices from '../components/HomePage/OurServices'

const Home = () => {
  return (
    <div className='w-10/12 mx-auto'>
        <Slider/>
        <Categories />
        <Products />
        <OurServices />
        <Newsletter />
    </div>
  )
}

export default Home
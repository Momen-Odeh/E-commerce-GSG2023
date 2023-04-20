import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'
import info from '../ProductPreview/info.js'


import ProductPreview from '../ProductPreview'
import {data } from '../ProductPreview/data'
import Arrivals from "../Arrivals"
import Cards from "../Services"
import Merg from '../Merg/Merg'
// import Slider from "../Slider/Slider.js";
function HomePage() {
  return (
    <div className='HomePage'>
    <Merg/>
        <CategoryList/>
        <HR/>
        <ProductPreview data={data} title="Best Selling Products" secTitle="This Month" clickable/>
        <HR/>
        <MusicExperience/>
        {/*  */}
        <ProductPreview data={info} title="Explore Our Products" secTitle="Our Products" clickable/>

        <Arrivals />
        <Cards />
    </div>
  )
}

export default HomePage
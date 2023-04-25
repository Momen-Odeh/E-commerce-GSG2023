import React from 'react'
import CategoryList from '../CategoryList/ar/index'
import MusicExperience from '../MusicExperience'
import HR from '../HR/ar/index'
import info from '../ProductPreview/ar/info.ar.js'


import ProductPreview from '../ProductPreview/ar'
import {data } from '../ProductPreview/ar/data'
import Arrivals from "../Arrivals/ar"
import Cards from "../Services"
import Merg from '../Merg/ar/Merg'
function HomePage() {
  return (
    <div className='HomePage'>
        <Merg/>
        <CategoryList/>
        <HR/>
        <ProductPreview data={data} title="الآفضل مبيعا" secTitle="هذا الشهر" clickable/>
        <HR/>
        <MusicExperience/>
        <ProductPreview data={info} title="تصفح منتجاتنا" secTitle="منتجاتنا"/>
        <Arrivals />
        <Cards />
    </div>
  )
}

export default HomePage
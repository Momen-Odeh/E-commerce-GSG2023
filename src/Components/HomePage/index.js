import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'
import ProductPreview from '../ProductPreview'
import {data } from '../ProductPreview/data'
import Arrivals from "../Arrivals"
import Cards from "../Services"

function HomePage() {
  return (
    <div className='HomePage'>
        <CategoryList/>
        <HR/>
        <ProductPreview data={data} title="Best Selling Products" secTitle="This Month" clickable/>
        <HR/>
        <MusicExperience/>
        <Arrivals />
        <Cards />
    </div>
  )
}

export default HomePage
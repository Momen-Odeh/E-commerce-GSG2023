import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'
import ProductContainer from '../ProductContainer'
import {data} from '../ProductContainer/data'
function HomePage() {
  return (
    <div className='HomePage'>
        <CategoryList/>
        <HR/>
        <ProductContainer data={data} title="Best Selling Products" secTitle="This Month"/>
        <HR/>
        <MusicExperience/>
        <HR/>
        
    </div>
  )
}

export default HomePage
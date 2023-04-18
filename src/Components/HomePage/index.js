import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'
import ProductPreview from '../ProductPreview'
import {data} from '../ProductPreview/data'
function HomePage() {
  return (
    <div className='HomePage'>
        <CategoryList/>
        <HR/>
        <ProductPreview data={data} title="Best Selling Products" secTitle="This Month"/>
        <HR/>
        <MusicExperience/>
        <HR/>
        
    </div>
  )
}

export default HomePage
import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'
import ProductCard from '../ProductCard'
import PS from '../ProductCard/PS.png'
function HomePage() {
  return (
    <div className='HomePage'>
        <CategoryList/>
        <HR/>
        <MusicExperience/>
        <HR/>
        <ProductCard image={PS} title="title" rating={2} price={200} />
    </div>
  )
}

export default HomePage
import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'
import Arrivals from '../Arrivals'
import Cards from '../Services'

function HomePage() {
  return (
    <div className='HomePage'>
        <CategoryList/>
        <HR/>
        <MusicExperience/>
        <Arrivals />
        <Cards />
      
    </div>
  )
}

export default HomePage
import React from 'react'
import CategoryList from '../CategoryList'
import MusicExperience from '../MusicExperience'
import HR from '../HR'

function HomePage() {
  return (
    <div className='HomePage'>
        <CategoryList/>
        <HR/>
        <MusicExperience/>
    </div>
  )
}

export default HomePage
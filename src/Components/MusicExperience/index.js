import React from 'react'
import './index.css'
import MusicExperienceRight from '../MusicExperienceRight'
import MusicExperienceLeft from '../MusicExperienceLeft'
function MusicExperience() {
  return (
    <div className='MusicExperience'>
      <MusicExperienceLeft/>
      <MusicExperienceRight/>
    </div>
  )
}

export default MusicExperience
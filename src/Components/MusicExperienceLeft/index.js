import React from 'react'
import './index.css'
import MusicExperienceTitle from '../MusicExperienceTitle'
import MusicExperienceDescription from '../MusicExperienceDescription'
import TimeBlockList from '../TimeBlockList'
import ButtonMusic from '../ButtonMusic'
function MusicExperienceLeft() {
  return (
    <div className='MusicExperienceLeft'>
      <MusicExperienceTitle title="Categories"/>
      <MusicExperienceDescription decscription="Enhance Your Music Experience"/>
      <TimeBlockList/>
      <ButtonMusic data={"Buy Now!"}/>
      
    </div>
  )
}

export default MusicExperienceLeft
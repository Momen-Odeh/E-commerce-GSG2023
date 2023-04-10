import React from 'react'
import styles from './index.module.css'
import MusicExperienceRight from '../MusicExperienceRight'
import MusicExperienceLeft from '../MusicExperienceLeft'
function MusicExperience() {
  return (
    <div className={styles.MusicExperience}>
      <MusicExperienceLeft/>
      <MusicExperienceRight/>
    </div>
  )
}

export default MusicExperience
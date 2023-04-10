import React from 'react'
import RedBlock from '../RedBlock'
import styles from './index.module.css'
function SectionTitle({secTitle}) {
  return (
    <div className={styles.SectionTitle}>
        <RedBlock/>
        <p>{secTitle}</p>
    </div>
  )
}

export default SectionTitle
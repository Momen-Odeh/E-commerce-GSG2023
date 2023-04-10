import React from 'react'
import styles from './index.module.css'
function MainSectionTitle({label}) {
  return (
    <p className={styles.MainSectionTitle}>{label}</p>
  )
}

export default MainSectionTitle
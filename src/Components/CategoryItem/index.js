import React from 'react'
import styles from './index.module.css'
function CategoryItem ({icon,label}) {
    const Icon = icon
  return (
    <div className={styles.categoryItem}>
        <Icon className={styles.iconCategory} sx={{fontSize:'48px'}}/>
        <h6>{label}</h6>
    </div>
  )
}

export default CategoryItem 
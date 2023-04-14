import React from 'react'
import styles from './index.module.css'
function ProductTitle({title}) {
  return (
    <div className={styles.ProductTitle}>
      {title}
    </div>
  )
}

export default ProductTitle
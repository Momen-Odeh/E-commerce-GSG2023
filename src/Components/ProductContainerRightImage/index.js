import React from 'react'
import styles from './index.module.css'
function ProductContainerRightImage({img}) {
  return (
    <div className={styles.ProductContainerRightImage}>
      <img src={img}/>
    </div>
  )
}

export default ProductContainerRightImage
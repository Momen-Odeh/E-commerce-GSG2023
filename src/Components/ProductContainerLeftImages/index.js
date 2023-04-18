import React from 'react'
import styles from './index.module.css'
function ProductContainerLeftImages({imgs}) {
  return (
    <div className={styles.ProductContainerLeftImages}>
      {
        imgs.map((item,index)=><img src={item} key={index} />)
      }
      
    </div>
  )
}

export default ProductContainerLeftImages
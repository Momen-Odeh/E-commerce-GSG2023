import React from 'react'
import stayles from './index.module.css'
import ProductContainerLeftImages from '../ProductContainerLeftImages'
import ProductContainerRightImage from '../ProductContainerRightImage'
function ProductContainerLeft({data}) {
return (
    <div className={stayles.ProductContainerLeft}>
      <ProductContainerLeftImages imgs={data.leftImg}/>
      <ProductContainerRightImage img ={data.img}/>
    </div>
  )
}

export default ProductContainerLeft
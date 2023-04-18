import React from 'react'
import stayles from './index.module.css'
import ProductContainerLeft from '../ProductContainerLeft'
import ProductContainerRight from '../ProductContainerRight'
function ProductContainer() {
  return (
    <div className={stayles.ProductContainer}>
      <ProductContainerLeft/>
      <ProductContainerRight/>
    </div>
    
  )
}

export default ProductContainer
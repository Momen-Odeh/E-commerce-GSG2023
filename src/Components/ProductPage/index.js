import React from 'react'
import stayles from './index.module.css'
import ProductPreview from '../ProductPreview'
import ProductContainer from '../ProductContainer'
import { data2 } from "../ProductPreview/data2"


function ProductPage({data}) {
  
  return (
    <>
    <ProductContainer/>
    <ProductPreview data={data2} secTitle="Related Item" clickable/>
    </>
  )
}

export default ProductPage
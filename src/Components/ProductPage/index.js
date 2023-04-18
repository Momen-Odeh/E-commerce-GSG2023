import React from 'react'
import stayles from './index.module.css'
import ProductPreview from '../ProductPreview'
import {data2} from '../ProductPreview/data2'
import ProductContainer from '../ProductContainer'
function productPage() {
  return (
    <>
    <ProductContainer/>
    <ProductPreview data={data2} secTitle="Related Item"/></>
  )
}

export default productPage
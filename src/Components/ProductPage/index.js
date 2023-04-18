import React from 'react'
import stayles from './index.module.css'
import ProductContainer from '../ProductContainer'
import {data2} from '../ProductContainer/data2'
function productPage() {
  return (
    <ProductContainer data={data2} secTitle="Related Item"/>
  )
}

export default productPage
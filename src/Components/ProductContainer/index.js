import React from 'react'
import stayles from './index.module.css'
import ProductContainerLeft from '../ProductContainerLeft'
import ProductContainerRight from '../ProductContainerRight'
import { useParams } from 'react-router-dom';
import {data } from '../ProductPreview/data'
import {data2} from '../ProductPreview/data2'
function ProductContainer() {
  const {id} = useParams();
  let tmp = data.filter(x => x.title ===id )
  tmp.length === 0 ?tmp = data2.filter(x => x.title ===id ):console.log("dd",tmp);
  return (
    <div className={stayles.ProductContainer}>
      <ProductContainerLeft data={tmp[0]}/>
      <ProductContainerRight  data={tmp[0]}/>
    </div>
    
  )
}

export default ProductContainer
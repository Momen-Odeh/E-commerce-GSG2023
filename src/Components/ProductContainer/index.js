import React from 'react'
import stayles from './index.module.css'
import ProductContainerLeft from '../ProductContainerLeft'
import ProductContainerRight from '../ProductContainerRight'
import { useParams } from 'react-router-dom';
import {data } from '../ProductPreview/data'
import {data2} from '../ProductPreview/data2'
import Grid from '@mui/material/Grid';
function ProductContainer() {
  const {id} = useParams();
  let tmp = data.filter(x => x.title ===id )
  tmp.length === 0 ?tmp = data2.filter(x => x.title ===id ):console.log("get data",tmp);
  return (
    <Grid container width={"81.25%"} rowGap={'30px'} justifyContent={'space-between'} margin={"0 auto"} marginBottom={'100px'}>
      <Grid item lg={7.5} md={9} sm={12}><ProductContainerLeft data={tmp[0]}/></Grid>
      <Grid item lg={4} md={2.5} sm={12}><ProductContainerRight  data={tmp[0]}/></Grid>
    </Grid>
    
  )
}

export default ProductContainer
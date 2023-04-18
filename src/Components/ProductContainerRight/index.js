import React from 'react'
import stayles from './index.module.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProductTitle from '../ProductTitle';
import RateProduct from '../RateProduct';
function ProductContainerRight({data}) {
  return (

    <div className={stayles.ProductContainerRight}>
        <Grid container spacing={3}>
          <Grid item xs={12}><ProductTitle title={data.title}/></Grid>
          <Grid item xs={12}><RateProduct rate={data.stars} numReviwer={data.rating} satus={'In Stock'}/></Grid>
          <Grid item xs={12}><ProductTitle title={`$ ${data.AfterPrice}`}/></Grid>
          <Grid item xs={12}><p className={stayles.p_txt}>{data.describtion}</p></Grid>
          <Grid item xs={12}><hr/></Grid>
        </Grid>
      
    </div>
  )
}


export default ProductContainerRight
import React from 'react'
import stayles from './index.module.css'
import ProductContainerLeftImages from '../ProductContainerLeftImages'
import ProductContainerRightImage from '../ProductContainerRightImage'
import Grid from '@mui/material/Grid';
function ProductContainerLeft({data}) {
return (
    <Grid container className={stayles.ProductContainerLeft} justifyContent={'space-between'} rowGap={'30px'} >
      <Grid item lg={4} md={4.3} sm={4.5} xs={12} margin={'0 auto'}><ProductContainerLeftImages imgs={data.leftImg}/></Grid>
      <Grid item lg={7.4} md={7.3} sm={7} xs={12}><ProductContainerRightImage img ={data.img}/></Grid>
    </Grid>
  )
}

export default ProductContainerLeft
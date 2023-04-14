import React from 'react'
import stayles from './index.module.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProductTitle from '../ProductTitle';
import RateProduct from '../RateProduct';
function ProductContainerRight() {
  return (

    <div className={stayles.ProductContainerRight}>
        <Grid container spacing={3}>
          <Grid item xs={12}><ProductTitle title={'Havic HV G-92 Gamepad'}/></Grid>
          <Grid item xs={12}><RateProduct rate={4} numReviwer={150} satus={'In Stock'}/></Grid>
          <Grid item xs={12}><ProductTitle title={'$192.00'}/></Grid>
          <Grid item xs={12}><p className={stayles.p_txt}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p></Grid>
          <Grid item xs={12}><hr/></Grid>
        </Grid>
      
    </div>
  )
}


export default ProductContainerRight
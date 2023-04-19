import React from 'react'
import styles from './index.module.css'
import Grid from '@mui/material/Grid';
function ProductContainerLeftImages({imgs}) {
  return (
    <Grid container className={styles.ProductContainerLeftImages} gap={'20px'} margin={'0 auto'}>
      {
        imgs.map((item,index)=>
        
        <Grid item key={index} className={styles.ProductContainerLeftImg}sm={12} xs={5.3} ><img src={item}/></Grid>
        
        )
      
      }
      
    </Grid>
  )
}

export default ProductContainerLeftImages
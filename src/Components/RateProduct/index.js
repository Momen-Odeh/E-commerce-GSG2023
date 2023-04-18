import React from 'react'
import styles from './index.module.css'
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
function RateProduct({rate,numReviwer,satus}) {
  return (
    <div className={styles.RateProduct}>
        <Grid container spacing={0}>
          <Grid item><Rating name="read-only" value={rate} readOnly size="small"/></Grid>
          <Grid item><div className={styles.numReviews}>({numReviwer} Reviews)</div></Grid>
          <Grid item><div className={styles.stutus}>{satus}</div></Grid>
          {/* <Grid item xs={4}><ProductTitle title={'$192.00'}/></Grid> */}
        </Grid>
    </div>
  )
}

export default RateProduct
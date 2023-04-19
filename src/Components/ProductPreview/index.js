import React from 'react'
import styles from './index.module.css'
import ProductCard from '../ProductCard'
import SectionTitle from '../SectionTitle'
import MainSectionTitle from '../MainSectionTitle'
import ActionButton from '../ActionButton'
import Grid from '@mui/material/Grid';

function ProductContainer({ data, title, secTitle,clickable }) {
  return (
    <div className={styles.Container}>
      <SectionTitle secTitle={secTitle} />
      {title && 
      <div className={styles.Title}>
        <MainSectionTitle label={title} />
        <ActionButton Title='View All' />
      </div>
      }
      <Grid className={styles.ProductContainer} container justifyContent="space-between">
        {data.map((item, index) => {
          let clickableValue = false
          clickable? clickableValue=true : clickableValue=false
          return(
            <Grid item margin={'0 auto'}><ProductCard key={index} className={styles.Link} image={item.img} title={item.title} rating={item.rating} BeforePrice={item.BeforePrice} AfterPrice={item.AfterPrice} stars={item.stars} discount={item.discount} clickable={clickableValue} /> </Grid> 
            )
          }
          )
          }
      </Grid >
    </div>
  )
}

export default ProductContainer
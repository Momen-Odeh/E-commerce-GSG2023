import React from 'react'
import styles from './index.module.css'
import ProductCard from '../ProductCard'
import SectionTitle from '../SectionTitle'
import MainSectionTitle from '../MainSectionTitle'
import ActionButton from '../ActionButton'


function ProductContainer({ data, title, secTitle }) {
  return (
    <div className={styles.Container}>
      <SectionTitle secTitle={secTitle} />
      {title && 
      <div className={styles.Title}>
        <MainSectionTitle label={title} />
        <ActionButton Title='View All' />
      </div>
      }
      <div className={styles.ProductContainer}>

        {data.map(item => {
          return <ProductCard image={item.img} title={item.title} rating={item.rating} BeforePrice={item.BeforePrice} AfterPrice={item.AfterPrice} stars={item.stars}/>
        })}
      </div>
    </div>
  )
}

export default ProductContainer
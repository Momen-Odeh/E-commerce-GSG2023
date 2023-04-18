import React from 'react'
import styles from './index.module.css'
import ProductCard from '../ProductCard'
import SectionTitle from '../SectionTitle'
import MainSectionTitle from '../MainSectionTitle'
import ActionButton from '../ActionButton'
import { Link } from 'react-router-dom';

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
      <div className={styles.ProductContainer}>
     
        {data.map((item,index) => {
          return  clickable ?
          <Link key={index} onClick={window.scrollTo(0, 0)} className={styles.Link} to={`/productPage/${item.title}`}><ProductCard image={item.img} title={item.title} rating={item.rating} BeforePrice={item.BeforePrice} AfterPrice={item.AfterPrice} stars={item.stars}/></Link>:
          <ProductCard key={index} image={item.img} title={item.title} rating={item.rating} BeforePrice={item.BeforePrice} AfterPrice={item.AfterPrice} stars={item.stars}/>
        })}
      </div>
    </div>
  )
}

export default ProductContainer
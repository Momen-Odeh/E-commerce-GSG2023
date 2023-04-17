import React from 'react'
import stayles from './index.module.css'
import ProductContainerLeftImages from '../ProductContainerLeftImages'
import ProductContainerRightImage from '../ProductContainerRightImage'
import PS from './images/PS.png'
import PS1 from './images/PS1.png'
import PS2 from './images/PS2.png'
import PS3 from './images/PS3.png'
import PS4 from './images/PS4.png'
function ProductContainerLeft() {
return (
    <div className={stayles.ProductContainerLeft}>
      <ProductContainerLeftImages imgs={[PS1,PS2,PS3,PS4]}/>
      <ProductContainerRightImage img ={PS}/>
    </div>
  )
}

export default ProductContainerLeft
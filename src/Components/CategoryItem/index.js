import React from 'react'
import './index.css'
function CategoryItem ({icon,label}) {
    const Icon = icon
  return (
    <div className='categoryItem'>
        <Icon className='iconCategory' sx={{fontSize:'48px'}}/>
        <h6>{label}</h6>
    </div>
  )
}

export default CategoryItem 
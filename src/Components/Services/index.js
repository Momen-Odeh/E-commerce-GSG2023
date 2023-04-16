import React from 'react'
import './style.css'
import { data } from "./data";

const cards = () => {
  return (
    <div className='Services'>
      {data.map(item => {
        return <div className='ServiceCard'>
          <div className='CardImageBackground'>
          <div className='CardImage'>{item.icon}</div>
          </div>
          
          <h3 className='CardTitle'>{item.title}</h3>
          <h4 className='CardInfo'>{item.info}</h4>
        </div>
      })}

    </div>
  )
}

export default cards
import React from 'react'
import './style.css'
import { data } from "./data";
import Grid from '@mui/material/Grid';
const cards = () => {
  return (
    <div className='Services'>
      <Grid className='ProductContainer' container justifyContent="space-between">
        {data.map(item => {
          return <div className='ServiceCard'>
            <div className='CardImageBackground'>
              <div className='CardImage'>{item.icon}</div>
            </div>
            <h3 className='CardTitle'>{item.title}</h3>
            <h4 className='CardInfo'>{item.info}</h4>
          </div>
        })}
      </Grid>
    </div>
  )
}

export default cards
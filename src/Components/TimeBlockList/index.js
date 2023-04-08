import React from 'react'
import './index.css'
import TimeBlockItem from '../TimeBlockItem'
function TimeBlockList() {
  let timeArr = [
    {
      time:"23",
      label:"Hours"
    },
    {
      time:"05",
      label:"Days"
    },
    {
      time:"59",
      label:"Minutes"
    },
    {
      time:"35",
      label:"Secounds"
    }
  ]
  return (
    <div className='TimeBlockList'>
      {timeArr.map(((item,index)=><TimeBlockItem timeLabel={item.time} typeLabel={item.label} key={index}/>))}
    </div>
  )
}

export default TimeBlockList
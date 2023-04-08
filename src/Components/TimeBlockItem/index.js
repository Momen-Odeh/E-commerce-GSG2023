import React from 'react'
import './index.css'
function TimeBlockItem({timeLabel,typeLabel}) {
  return (
    <div className='TimeBlockItem'>
      <div className='timeLabel'>{timeLabel}</div>
      <div className='typeLabel'>{typeLabel}</div>
    </div>
  )
}

export default TimeBlockItem
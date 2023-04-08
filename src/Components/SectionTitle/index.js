import React from 'react'
import RedBlock from '../RedBlock'
import './index.css'
function SectionTitle({secTitle}) {
  return (
    <div className='SectionTitle'>
        <RedBlock/>
        <p>{secTitle}</p>
    </div>
  )
}

export default SectionTitle
import React from 'react'
import Title from './Info/Title'
import Description from './Info/Description'
import Button from './Info/Button'
import './style.css';

const Speakers = () => {
  return (
    <div className='Speakers'>
     <Title Title={"اجهزه ذكيه"}/>   
     <Description Description={"امازون اليكسا"}/>
     <Button/>
    </div>
  )
}

export default Speakers
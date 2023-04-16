import React from 'react'
import Title from './Info/Title'
import Description from './Info/Description'
import Button from './Info/Button'
import './style.css';

const Woman = () => {
  return (
    <div className='Woman'>
     <Title Title={"Women's Collection"}/>   
     <Description Description={"Featured women's collection that give you another vibe"}/>
     <Button/>
    </div>
  )
}

export default Woman
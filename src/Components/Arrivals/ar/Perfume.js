import React from 'react'
import Title from './Info/Title'
import Description from './Info/Description'
import Button from './Info/Button'
import './style.css';

const Perfume = () => {
  return (
    <div className='Perfume'>
     <Title Title={"عطورات"}/>   
     <Description Description={"Gucci عطر"}/>
     <Button/>
    </div>
  )
}

export default Perfume
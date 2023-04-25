import React from 'react'
import Title from './Info/Title'
import Description from './Info/Description'
import Button from './Info/Button'
import './style.css';

const Playstation = () => {
  return (
    <div className="Playstation">
     <Title Title={"PlayStation 5"}/>   
     <Description Description={"متوفر باللون الآبيض والآسود"}/>
     <Button/>
    </div>
  )
}

export default Playstation
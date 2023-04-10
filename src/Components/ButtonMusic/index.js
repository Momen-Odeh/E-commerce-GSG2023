import React from 'react'
import './index.css'
import ButtonMUI from '@mui/material/Button';
function ButtonMusic({data}) {
  return (
    <ButtonMUI className='ButtonMUI' variant="contained" color="success" size='large' sx={{backgroundColor:'#00ff66',padding:'16px 48px'}}>{data}</ButtonMUI>
  )
}

export default ButtonMusic
import React from 'react'
import styles from './index.module.css'
import ButtonMUI from '@mui/material/Button';
function ButtonMusic({data}) {
  return (
    <ButtonMUI className={styles.ButtonMUI} variant="contained" color="success" size='large' sx={{backgroundColor:'#00ff66',padding:'16px 48px'}}>{data}</ButtonMUI>
  )
}

export default ButtonMusic
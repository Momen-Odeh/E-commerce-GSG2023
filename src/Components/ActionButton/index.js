//Takes Title="~~" as an attribute

import React from 'react'
import styles from './index.module.css'
import { Button } from '@mui/material'

const index = ({Title}) => {
  return (
    <Button color="error" className={styles.Button} variant="contained">{Title}</Button>
  )
}

export default index
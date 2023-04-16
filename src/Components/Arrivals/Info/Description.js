import React from 'react'
import styles from "./Info.module.css"

const Description = ({Description}) => {
  return (
    <h3 className={styles.text}>{Description}</h3>
  )
}

export default Description
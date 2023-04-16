import React from 'react'
import styles from "./Info.module.css"

const Title = ({Title}) => {
  return (
    <h2 className={styles.text}>{Title}</h2>
  )
}

export default Title
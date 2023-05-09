import React from 'react'
import styles from './ImcLevel.module.css'

const ImcLevel = ({level}) => {
  return (
    <div className={styles.flexItem}>{level.level}</div>
  )
}

export default ImcLevel
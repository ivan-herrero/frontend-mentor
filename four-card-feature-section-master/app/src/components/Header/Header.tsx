import React from 'react'

import { useStringsContext } from '../../context/StringsContext'
import styles from './Header.module.scss'

function Header() {
  const { title, subtitle, body } = useStringsContext()

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{body}</p>
    </header>
  )
}

export default Header

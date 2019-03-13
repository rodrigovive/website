import React from "react"
import styles from './Navbar.module.scss'
import { Link } from "gatsby"
export default () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <Link className={styles.link} to='/'>COOL THINGS</Link>
      <Link className={styles.link} to='/about'>ABOUT</Link>
    </div>
  </div>

)
import React from "react"
import styles from "./Layout.module.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default ({ children }) => (

  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <Footer>
      rodrigoviveros.me
    </Footer>
  </div>
)
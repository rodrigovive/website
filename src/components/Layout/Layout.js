import React from "react"
import styles from "./Layout.module.scss"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div className={styles.container}>
    {/*<Header />*/}
    <div className={styles.content}>
      {children}
    </div>
    <Footer>
      Made In Perú - Rodrigo Viveros
    </Footer>
  </div>
)
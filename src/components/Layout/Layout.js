import React from "react"
import styles from "./Layout.module.scss"
import Footer from "../Footer/Footer"

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
    <Footer>
      Rodrigo Viveros - Made with JS
    </Footer>
  </div>
)
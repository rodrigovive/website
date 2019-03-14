import React from "react"
import styles from "./404.module.scss"
import Layout from "../components/Layout/Layout"
import Title from '../components/Title/Title'
import { Link } from "gatsby"
import Seo from '../components/Seo/Seo'
export default () => (
  <Layout>
    <Seo />
    <Title text="Page not found" />
    <div className={styles.content}>
      <p className={styles.errorMessage}>The page you are looking for does not
        exists.</p>
      <Link to='/' >Home</Link>
    </div>
  </Layout>
)

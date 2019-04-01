import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ArticleList from "../components/ArticleList/ArticleListProject"
import Header from "../components/Header/Header"
// import { Helmet } from "react-helmet"
import Seo from "../components/Seo/Seo"

export default () => (
  <Layout>
      <Seo title="Jhair Rodrigo Viveros Cordova - Projects" pathname="/project"
           description="Project for learning and work"/>
      <Title text="Rodrigo Viveros - Projects"/>
      <Header/>
      {/*<div>*/}
      {/*<Link to="/">Home</Link> | <Link to="/about">About</Link>*/}
      {/*</div>*/}
      {/*<p>Lorem</p>*/}
      <main>
        <h2>I build things</h2>
        <p>I have created projects for learning and work</p>
        <ArticleList />

      </main>
  </Layout>

)


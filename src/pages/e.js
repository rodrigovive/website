import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ArticleList from "../components/ArticleList/ArticleListPBE"
import Header from "../components/Header/Header"
// import { Helmet } from "react-helmet"
import Seo from "../components/Seo/Seo"

export default () => (
  <Layout>


      <Seo title="Learning English" pathname="/e"
           description="Learning English"/>
      <Title text="Rodrigo Viveros - PBE"/>
      <Header/>
      {/*<div>*/}
      {/*<Link to="/">Home</Link> | <Link to="/about">About</Link>*/}
      {/*</div>*/}
      {/*<p>Lorem</p>*/}
      <h2>This is a exercise of a English' book</h2>
      <ArticleList />
  </Layout>

)


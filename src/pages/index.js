import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ArticleList from "../components/ArticleList/ArticleListBlog"
import Header from "../components/Header/Header"
// import { Helmet } from "react-helmet"
import Seo from "../components/Seo/Seo"

export default () => (
  <Layout>
    <Seo title="Rodrigo Viveros | Personal Site"
         description="Blog for interesting stuff some courses online, books and more"/>
    <Title text="Rodrigo Viveros | Personal Site"/>
    <Header/>
    {/*<div>*/}
    {/*<Link to="/">Home</Link> | <Link to="/about">About</Link>*/}
    {/*</div>*/}
    {/*<p>Lorem</p>*/}
    <h2>I write stuff</h2>
    <p>I blog about stuff I find interesting (courses online, books and
      more)</p>
    <ArticleList type="blog"/>
  </Layout>

)


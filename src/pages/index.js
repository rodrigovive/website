import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ArticleList from "../components/ArticleList/ArticleListBlog"
import Header from "../components/Header/Header"
// import { Helmet } from "react-helmet"
import Seo from '../components/Seo/Seo'
export default () => (
  <Layout>
    <Seo />
    <Title text="Jhair Rodrigo Viveros Cordova"/>
    <Header/>
    {/*<div>*/}
    {/*<Link to="/">Home</Link> | <Link to="/about">About</Link>*/}
    {/*</div>*/}
    {/*<p>Lorem</p>*/}
    <h2>Me</h2>
    <p>I am extremely passionate about software engineering and making people’s lives better with technology. I feel comfortable working with javascript and php. Driven by values, good-will and the spirit of a fighter.</p>
  </Layout>

)


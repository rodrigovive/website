import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ArticleList from '../components/ArticleList/ArticleList'
import Header from '../components/Header/Header'

export default () => (
  <Layout>
    <Title text="Jhair Rodrigo Viveros Cordova" />
    <Header />
    {/*<div>*/}
      {/*<Link to="/">Home</Link> | <Link to="/about">About</Link>*/}
    {/*</div>*/}
    {/*<p>Lorem</p>*/}
    <h2>I write stuff</h2>
    <p>I blog about stuff I find interesting (courses online, books and more)</p>
    <ArticleList />
  </Layout>
)


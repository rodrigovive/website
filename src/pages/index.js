import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ArticleList from '../components/ArticleList/ArticleList'
export default () => (
  <Layout>
    <Title text="Welcome" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </div>
    <p>Lorem</p>
    <ArticleList />
  </Layout>
)


import React from 'react'
import Header from "../components/Header/Header"
import Layout from '../components/Layout/Layout'
import Title from "../components/Title/Title"
import Seo from "../components/Seo/Seo"
export default () => (
  <Layout>
    <Seo title="Jhair Rodrigo Viveros Cordova" pathname="/about"/>
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
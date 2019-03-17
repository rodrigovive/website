import React from "react"
import Header from "../components/Header/Header"
import Layout from "../components/Layout/Layout"
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
    <main>
      <h2>Hello =)</h2>
      <p>My name is Jhair Rodrigo Viveros Cordova.</p>
        <ol>
          <ul>
            I am extremely passionate about software engineering and making
            people’s lives better with technology.
          </ul>
          <ul>
            I studied Computer Engineering and Systems.
          </ul>
          <ul>
            I feel comfortable working with javascript and php.
          </ul>
          <ul>
            I driven by values, good-will and the spirit of a
            fighter.
          </ul>
        </ol>

    </main>
  </Layout>
)
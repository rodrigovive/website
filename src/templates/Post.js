import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import styles from "./post.module.scss"
import Header from "../components/Header/Header"
import Seo from "../components/Seo/Seo"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title}
           description={post.excerpt.substring(0, 250)}
           pathname={"/" + post.fields.slug}
           image={"https://source.unsplash.com/960x200/?" +
           post.frontmatter.keywords}/>

      <div className={styles.container}>
        <Title text={post.frontmatter.title}></Title>
        <Header/>
        <div style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#fafafa",
          backgroundImage: "Url(https://source.unsplash.com/960x200/?" +
            post.frontmatter.keywords + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "30px",
        }}></div>
        <div className={styles.content}
             dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
    </Layout>
  )
}
//Filter for slug
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        keywords
      }
      excerpt
    }
  }
`
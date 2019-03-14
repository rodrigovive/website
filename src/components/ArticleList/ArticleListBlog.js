import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Article from "../Article/Article"

export default ({ type }) => (
  <StaticQuery

    query={graphql`query {
         allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC,}
         ,filter: {frontmatter: {type: {eq: "blog"}}}) {
           totalCount
           edges {
             node {
               fields {
                  slug
               }
               id
               frontmatter {
                 title
                 image
                 keywords
                 date(formatString: "MMMM YYYY")
               }
               excerpt
             }
           }
         }
       }`

    }

    render={data => (
      <div>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            key={node.id}
            id={node.id}
            to={node.fields.slug}
            keywords={node.frontmatter.keywords}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}/>
        ))}
      </div>
    )}

  />
)
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const dummyPosts = [
  {date: "Feb 09, 2020", title: "Hello World"}
]

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: fileAbsolutePath, order: DESC}) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div class="content">
        <h2>📝 Blog Posts</h2>
        <ul id="blog-posts" class="posts">
          {
            data.allMarkdownRemark.nodes.map(post => {
              return(
                <li><span>Date &raquo;</span> {post.frontmatter.title}</li>
              )
            })
          }
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

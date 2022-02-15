import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"


// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div class="content">
        <h2>📝 Blog Posts</h2>
        <ul id="blog-posts" class="posts">
          {
            data.allMarkdownRemark.nodes.map(post => {
              return(
                <li><span>{post.fields.date} &raquo;</span> <Link to={`/posts/${post.fields.slug}`}>{post.frontmatter.title}</Link></li>
              )
            })
          }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: fileAbsolutePath, order: DESC}) {
      nodes {
        frontmatter {
          title
        }
        fields {
          date(formatString: "MMM DD, YYYY")
          slug
        }
      }
    }
  }
`

export default IndexPage

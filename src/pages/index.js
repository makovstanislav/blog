import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


// markup
const IndexPage = ({ data }) =>
  <Layout>
    <Seo />
    <div>
      <h1 class="title">📝 How to use Scala 3</h1>
      <ul id="blog-posts" class="posts">
        {
          data.allMarkdownRemark.nodes.map(post => {
            return(
              <li><span class="is-family-monospace has-text-grey-light">{post.fields.date} &raquo;</span> <Link to={`/posts/${post.fields.slug}`}>{post.frontmatter.title}</Link></li>
            )
          })
        }
      </ul>
    </div>
  </Layout>

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: fields___date, order: DESC}) {
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

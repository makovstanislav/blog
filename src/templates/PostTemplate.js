import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"


const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  function formatNavTitle(str) {
    const limit = 20
    return str.length > limit ? `${str.substring(0, limit)}...` : str
  }

  return(
    <Layout>
      <div class="content p-3">
        <div class="level">
          <div class="level-left">
            <div class="level-item has-text-grey-light">{post.fields.date}</div>
          </div>
          <div class="level-right">
            <div class="level-item"><Link to="/">🏠</Link></div>
          </div>
        </div>

        <h1><b>{post.frontmatter.title}</b></h1>
        <article dangerouslySetInnerHTML={{__html: post.html}}/>

        <div class="level">
          <div class="level-left">
            <div class="level-item">
              {previous && (
                <Link to={`/posts/${previous.fields.slug}`}>⬅️ {formatNavTitle(previous.frontmatter.title)}</Link>
              )}
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              {next && (
                <Link to={`/posts/${next.fields.slug}`}>{formatNavTitle(next.frontmatter.title)} ➡️</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousId: String
    $nextId: String
  ) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      fields {
        date(formatString: "MMM DD, YYYY")
      }
      html
    }
    previous: markdownRemark(id: { eq: $previousId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate

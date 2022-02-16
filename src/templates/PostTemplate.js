import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  function formatNavTitle(str) {
    const limit = 20
    return str.length > limit ? `${str.substring(0, limit)}...` : str
  }

  return(
    <Layout>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description} article="true" />
      <div class="content p-3">
        <div class="level is-mobile">
          <div class="level-left">
            <p class="level-item has-text-grey-light">{post.fields.date}</p>
          </div>
          <div class="level-right">
            <p class="level-item"><Link to="/">🏠</Link></p>
          </div>
        </div>

        <h1><b>{post.frontmatter.title}</b></h1>
        <article dangerouslySetInnerHTML={{__html: post.html}}/>

        <div class="box mt-3 has-background-warning-light">
          <div class="level">
            <div class="level-item">
              <div class="s9-widget-wrapper" />
            </div>
          </div>

          <div class="level m-2">
            <div class="level-item">
              {previous && (
                <Link to={`/posts/${previous.fields.slug}`}>
                  <button class="button is-link-light">
                    ⬅️ {formatNavTitle(previous.frontmatter.title)}
                  </button>
                </Link>
              )}
            </div>
            <div class="level-item">
              {next && (
                <Link to={`/posts/${next.fields.slug}`}>
                  <button class="button is-link-light">
                    {formatNavTitle(next.frontmatter.title)} ➡️
                  </button>
                </Link>
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
        description
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

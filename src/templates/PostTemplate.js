import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


const PostTemplate = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query BlogPostBySlug($slug: String = "") {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      fields {
        date(formatString: "MMM DD, YYYY")
      }
      html
    }
  }
`

export default PostTemplate

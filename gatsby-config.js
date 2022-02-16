module.exports = {
  siteMetadata: {
    title: `Anatolii's Programming Blog`,
    siteUrl: `https://www.yourdomain.tld`,
    personal: {

    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-graphviz`,
          `gatsby-remark-plantuml-lite`,
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              tight: true,
              fromHeading: 1,
            }
          },
          `gatsby-remark-autolink-headers`,  // Must go before prismjs to avoid https://github.com/gatsbyjs/gatsby/issues/5764 – see docs
          `gatsby-remark-prismjs`,
        ]
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
    __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./posts/",
      }
    }
  ]
};
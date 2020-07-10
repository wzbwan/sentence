import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      {/* {data.allStrapiBook.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.name}</h3>
        </div>
      ))} */}
      <h1>文章列表</h1>
      <h4>共{data.allMarkdownRemark.totalCount} 篇文章</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
          <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </div>
    <Link to="/files/">Go to files</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/game/">Go to Game Page</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
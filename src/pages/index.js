import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Container from '@material-ui/core/Container'
import BlogCard from '../components/BlogCard'

const IndexPage = ({ data }) => (
  <Container maxWidth="lg">
    <h1>BLOG.ZENGBAO.WANG</h1>
    
      <h4>共{data.allMarkdownRemark.totalCount} 篇文章</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <BlogCard title={node.frontmatter.title} date={node.frontmatter.date} desc={node.excerpt} />
          </Link>
        </div>
      ))} 
    
    {/* <SEO title="Home" /> */}

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Container>
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
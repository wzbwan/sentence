import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const GamePage = ({data}) => (
    <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>Welcome to page game</p>
        <p>{data.site.siteMetadata.description}</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default GamePage
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const FilesPage = ({ data }) => (
    <Layout>
        <p>Welcome to page files</p>
        <table>
            <thead>
                <tr>
                    <th>relativePath</th>
                    <th>prettySize</th>
                    <th>extension</th>
                    <th>birthTime</th>
                </tr>
            </thead>
            <tbody>
                {data.allFile.edges.map(({ node }, index) => (
                    <tr key={index}>
                        <td>{node.relativePath}</td>
                        <td>{node.prettySize}</td>
                        <td>{node.extension}</td>
                        <td>{node.birthTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default FilesPage
export const query = graphql`
  query {
     allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

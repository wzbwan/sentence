import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const GamePage = ({data}) => (
    <Layout>
        <h1>Game Page</h1>
        <p>Welcome to Game Page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default GamePage


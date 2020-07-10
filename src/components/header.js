import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ThemeToggler>
          {
            ({theme, toggleTheme}) => {
              return (
                <Fragment>
                  <button 
                  onClick={()=>{
                    const nextTheme = theme === 'light' ? 'dark' : 'light'
                    toggleTheme(nextTheme)
                  }}
                  >dark mode</button>  
                </Fragment>
              )
            }
          }
          
        </ThemeToggler> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

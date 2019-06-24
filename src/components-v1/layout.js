/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import 'normalize.css/normalize.css'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
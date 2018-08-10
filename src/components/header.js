import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
      <Link to="/product">Product</Link>
      <Link to="/music">Music</Link>
      <Link to="/personal">Personal</Link>
    </div>
  </div>
)

export default Header

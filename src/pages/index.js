import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>I'm Learning <br />create React components / pages / apps</h1>
    <p>I'm using a course called React For Designers.</p>
    <p>It seems like it's going to be pretty cool.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

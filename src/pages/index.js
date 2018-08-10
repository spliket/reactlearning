import React from 'react'
import Link from 'gatsby-link'

import Card from '../components/card';

const IndexPage = () => (
  <div className="cards">
    <h2>Our Products</h2>
    <div className="cardGroup">
      <Card
        title="360 View"
        text="The Growth Platform"
      />
      <Card
        title="360 View"
        text="The Original Platform"
      />
      <Card
        title="360 View"
        text="The Mobile Platform"
      />
    </div>
  </div>
)

export default IndexPage

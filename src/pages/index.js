import React from 'react'
import Link from 'gatsby-link'

import Card from '../components/card';

const IndexPage = () => (
  <div className="cards">
    <h2>360 View Products</h2>
    <div className="cardGroup">
      <Card
        title="The Growth Platform"
        text="It's what we're working on! It's gonna be great!"
      />
      <Card
        title="The Original Platform"
        text="We're also working on this, and it's already great!"
      />
      <Card
        title="The Mobile Platform"
        text="You can do stuff while you're on the go."
      />
      <Card
        title="The Next Big Thing"
        text="I just needed a 4th box!"
      />
    </div>
  </div>
)

export default IndexPage

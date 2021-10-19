import * as React from "react"
import Hero from "../components/homepage/hero"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="container">
    <Seo title="Home" />
    <Hero />    
  </div>
)

export default IndexPage

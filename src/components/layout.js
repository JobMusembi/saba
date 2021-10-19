import * as React from "react"
import PropTypes from "prop-types"

//styles
import "../styles/App.scss"
import Header from "./header"

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



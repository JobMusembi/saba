import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

//styles
import "../styles/App.scss"
import Header from "./header"
import Menu from "./menu"
import Loading from "./loading"


//framer
import { motion, AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {

  const [finishLoading, setFinishLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false)
    }, 3000)
  }, [])

  const [menuState, setMenuState] = useState(false)
  
  return (
    <motion.div exit={{ opacity: 0 }} >
      <AnimatePresence>
        {finishLoading ? (
          <Loading key={"home2"}/>
        ) : (
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
          >
            <Header 
            setMenuState={setMenuState}

            />
            <Menu menuState={menuState} setMenuState={setMenuState} />
            <div>
              <main>{children}</main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



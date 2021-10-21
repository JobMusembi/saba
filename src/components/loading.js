import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"

import diamondIcon from "../assets/svg/saba-diamond.svg"

const Loading = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setTimeout(() => {
          counter <= 99 && setCounter(counter + 1)
        }, 20)
      }, [counter])

    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="loading-screen">
            <div className="diamond-icon">
            <img src={diamondIcon} alt="saba studios diamond icon" />
            </div>
            {/* <div className="diamond-icon">
                <img src={diamondIcon} alt="saba studios diamond icon" />
            </div>
            <span className="progress">%{counter}</span> */}
        </motion.div>
    );
}

export default Loading;

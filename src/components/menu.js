import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
//const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

const Menu = ({ setMenuState, menuState }) => {
    return (
        <>
        <AnimatePresence>
            {menuState && (
                <motion.div className="menu-wrap">
                <motion.div className="container">
                <motion.div className="close-menu-wrap">
                    <motion.div className="close-wrap-inner">
                    <motion.div 
                    className="close-menu"
                    onClick={() => setMenuState(!menuState)}
                    >
                        <motion.span
                        animate={{ y: 2 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        ></motion.span>
                        <motion.span
                        animate={{ y: -2 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        ></motion.span>
                    </motion.div>
                    </motion.div>
                </motion.div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

export default Menu;

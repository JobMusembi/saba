import React from 'react';
import { AnimatePresence, motion} from "framer-motion"

const Contactform = ({ setContactState, contactState }) => {
    return (
        <>
        <AnimatePresence>
            {contactState && (
                <motion.div 
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
                className="contact-wrap" >
                <div className="container">
                <motion.div className="close-form-wrap">
                        <motion.div className="close-form-inner">
                            <motion.div 
                            className="close-form"
                            onClick={() => setContactState(!contactState)}
                            >
                                <motion.span
                                animate={{ rotate: 45, y: 2 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0.165, 0.84, 0.44, 1],
                                }}
                                ></motion.span>
                                <motion.span
                                animate={{ rotate: -45, y: -3 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0.165, 0.84, 0.44, 1],
                                }}
                                ></motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="contact-form">
                        <h3>Request for:</h3>
                        <form method="post" action="https://getform.io/f/6b7cccff-358c-46f2-a8aa-31bab9842368">
                            <label>
                                Furniture Name
                                <input type="text" name="name" required="required"/>
                            </label>
                            <label>
                                Your Name
                                <input type="text" name="name" required="required"/>
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" required="required" />
                            </label>
                            <label>
                                Message
                                <textarea name="message"rows="5" required="required" />
                            </label>
                            <button type="submit"><h6>submit</h6></button>
                            
                        </form>
                    </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

export default Contactform;

import React, {useState} from 'react';
import Seo from "../components/seo"
import {Image} from "../components/gatsby-images/image"
import menuList from "../components/data/products.json"
import { Link } from "gatsby"
import { AnimatePresence, motion } from 'framer-motion';

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

const Furniture = () => {

    const [items, setItems] = useState(menuList);
    const filterItem = (categItem) => {
        const updatedItems = menuList.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }

    return (
        <>
        <AnimatePresence exitBeforeEnter>
        <Seo title="Furniture" />
        <div className="container">
        <div className="products-wrap">
            <div className="filter-wrap">
                <span>filter</span>
                    <button onClick={() => setItems(menuList)} >All</button>
                    <button onClick={() => filterItem('seating')}  >Seating</button>
                    <button onClick={() => filterItem('tables')} >Tables</button>
                    <button onClick={() => filterItem('beds')} >Beds</button>
            </div>
            <div className="products-section">
                {items.map((elem) => {
                    const {id, featureImage, name, usPrice, kesPrice} = elem;
                    return (
                        <Link to={`/furniture/${id}`} key={id}>
                            <motion.div 
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ ...transition }}
                            className="product-container" >
                                <Image src={featureImage.src} />                   
                                <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 ,...transition }}
                                className="item-title">
                                    <h6>{name}</h6>
                                    <span>{usPrice}</span>
                                    <span>{kesPrice}</span>
                                </motion.div>
                            </motion.div>
                        </Link>
                    )
                }   
                    
                )}
            </div>
        </div>
        </div>
        </AnimatePresence>
        </>
    );
}

export default Furniture;

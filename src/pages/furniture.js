import React, {useState} from 'react';
import Seo from "../components/seo"
import {Image} from "../components/gatsby-images/image"
import menuList from "../components/data/products.json"
import { Link } from "gatsby"

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
        <Seo title="Furniture" />
        <div className="container">
        <div className="products-wrap">
            <div className="filter-wrap">
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
                            <div className="product-container" >
                                <Image src={featureImage.src} />                   
                                <div className="item-title">
                                    <h6>{name}</h6>
                                    <span>{usPrice}</span>
                                    <span>{kesPrice}</span>
                                </div>
                            </div>
                        </Link>
                    )
                }   
                    
                )}
            </div>
        </div>
        </div>
        </>
    );
}

export default Furniture;

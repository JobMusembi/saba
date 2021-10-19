import React, { useState } from "react"
//import { useLocation } from "@reach/router"

import { Image } from "../components/gatsby-images/image"
import backArrow from "../assets/svg/arrow-left.svg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'gatsby';
import Contactform from "../components/contactform";


const Product = ({ pageContext }) => {

    const [contactState, setContactState] = useState(false)

    const product = pageContext

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };

    
    return (
        <>
        <Contactform contactState={contactState} setContactState={setContactState} />
        <div className="container">
            <div className="single-product-wrap">
                <div className="back-svg">
                    <Link to="/furniture"><img src={backArrow} alt="arrow back" /></Link>
                </div>
            <div className="image-slider">
                <Slider {...settings}>                    
                    <div className="slider-inner">
                        <Image src={product.allProdImage.srcOne} />
                    </div>
                    <div className="slider-inner">
                        <Image src={product.allProdImage.srcTwo} />
                    </div>
                    <div className="slider-inner">
                        <Image src={product.allProdImage.srcThree} />
                    </div>
                </Slider>
            </div>
            <div className="item-title">
                <h5>{product.name}</h5>
            </div>
            <div className="item-price">
                <span>price</span>
                <p>{product.usPrice}<br />{product.kesPrice} </p>
            </div>
            <div className="item-description">
                <span>description</span>
                <p>{product.description}</p>
            </div>
            <div 
            role = "button"
            tabIndex={0}
            onClick={() => setContactState(!contactState)}
            onKeyDown={() => setContactState(!contactState)}
            className="contact-button" >
                    <h6>contact&nbsp;for&nbsp;purchase</h6>
            </div>
        </div>
        </div>
        </>
    );
}

export default Product;


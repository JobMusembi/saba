import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import sabaLogo from "../../assets/svg/saba-icon-black.svg"

const Hero = () => {
    return (
       
            <div className="hero-wrap">
                <div className="logo">
                    <h1>
                    <span>Saba</span>
                    <span>Studios</span>
                    </h1>
                </div>
                <div className="tagline">
                    <h3>
                        <span>A Furniture</span>
                        <span>Company</span>
                    </h3>
                </div>
                <div className="hero-image">
                    <StaticImage
                    src="../../assets/images/custom-door-frame.jpg"
                    width={500}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Custom Door Frame"
                    />
                </div>
                <div className="hero-location">
                    <p>Made in Lamu Island - Kenya.</p>
                    <div className="sign-off">
                    <img src={sabaLogo} alt="saba studios logo" />
                    <span>© {new Date().getFullYear()}</span>
                    
                    </div>
                </div>

            </div> 
    
    );
}

export default Hero;

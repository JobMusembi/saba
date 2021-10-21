import React from 'react';
import { Link } from "gatsby"

const FurnitureIndex = () => {
    return (
        <div className="container">
            <div className="f-index-wrap">
                <div className="f-name">
                    <Link to="/">
                        Furniture Index
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FurnitureIndex;

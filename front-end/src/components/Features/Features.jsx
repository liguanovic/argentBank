import React from "react";

import './Features.css';

const Features = ({ icon, alt, title, text }) => {
    return (
        <figure id="features">
            <img src={icon} alt={alt} />
            <figcaption>
                <h2>{title}</h2>
                <p>{text}</p>
            </figcaption>
        </figure>
    )
}

export default Features

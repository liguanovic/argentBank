import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <figure className="banner">
            <figcaption>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </figcaption>
        </figure>
    )
}

export default Banner
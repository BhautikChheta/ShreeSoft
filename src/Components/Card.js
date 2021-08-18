import React, { useState } from 'react';
import './Card.css';

function Card(props) {

    const [hover, isHover] = useState(false);

    return (
        <div className="card__container">
            <div className="img__container">
                <img src={props.path} alt="ShreeSoft" className='img'/>
                <div className="img__title">{props.header}</div>
            </div>
            <div className="image__overlay overlay__blur">
                <h1 className="overlay_title">
                    ShreeSoft's <span style={{textDecoration: 'underline',color: '#279c9c'}}>{props.header}</span>
                </h1>
                <p className="overlay_description">
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Card;
import React from 'react'
import starLogo from '../src/assets/star.png'
import { getImageUrl } from './imgs.js';


function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="card--img"><img src={getImageUrl(props.coverImg)} /></div>
            <div className="card--details">
                <div className="card--rating">
                    <img src={starLogo} alt="Star Logo" />
                    <p>{props.stats.rating} <span>({props.stats.reviewCount})∙{props.location}</span></p>
                </div>
                <p id='tagline'>{props.title}</p>
                <p id='pricing'><span>From ${props.price} </span>/ person</p>
            </div>
        </div>
    )
}

export default Card

import React from 'react'
import starLogo from '../src/assets/star.png'
import zaferes from '../src/assets/katie-zaferes.png'
function Card() {
    return (
        <div className="card">
            <div className="card--img"><img src={zaferes} alt="Zaferes Photo" /></div>
            <div className="card--details">
                <div className="card--rating">
                    <img src={starLogo} alt="Star Logo" />
                    <p>5.0 <span>(6)∙USA</span></p>
                </div>
                <p id='tagline'>Life lessons from Katie Zaferes</p>
                <p id='pricing'><span>From $136 </span>/ person</p>
            </div>
        </div>
    )
}

export default Card
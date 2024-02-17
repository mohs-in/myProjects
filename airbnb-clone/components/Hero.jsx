import React from 'react'
import PhotoGrid from '../src/assets/photo-grid.png'
function Hero() {
    return (
        <div className='hero--div'>
            <img src={PhotoGrid} alt="Photo Grid" className='hero--img' srcset="" />
            <h1 className='hero--heading'>Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero
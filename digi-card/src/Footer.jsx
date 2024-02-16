import React from 'react'
import twitter from './assets/Twitter-Icon.png'
import facebook from './assets/Facebook-Icon.png'
import instagram from './assets/Instagram-Icon.png'
import github from './assets/GitHub-Icon.png'
function Footer() {
    return (
        <div className="footer">
            <img src={twitter} alt="Twitter Logo" id='footer--tlogo' />
            <img src={facebook} alt="Facebook Logo" id='footer--flogo' />
            <img src={instagram} alt="Instagram Logo" id='footer--ilogo' />
            <img src={github} alt="GitHub Logo" id='footer--glogo' />
        </div>
    )
}

export default Footer
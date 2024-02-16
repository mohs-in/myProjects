import React from 'react'
import mailLogo from './assets/Mail.png'
import linkedinLogo from './assets/linkedin.png'
function Info() {
    return (
        <div className="info">
            <img />
            <h3 className='info--name'>Mohsin Khansab</h3>
            <h5 className='info--role'>Frontend Developer</h5>
            <small className='info--link'><a href='https://projects.mohs.ink'>mohs.ink</a></small>
            <div className="button-wrap">
                <button id='button-wrap-email'> <img src={mailLogo} alt="Mail Logo" /> Email</button>
                <button id='button-wrap-linkedin'> <img src={linkedinLogo} alt="LinkedIn Logo" />LinkedIn</button>
            </div>
        </div>
    )
}

export default Info
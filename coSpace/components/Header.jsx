import React from 'react'
import locLogo from '/loc.png'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li class="logo">
                        WeBarelyWork
                    </li>
                    <li>
                        <img src={locLogo} class="icon" alt="location" />
                    </li>
                </ul>
            </nav> 
            <section>
                <h1>The best coworking spaces for lazy devs.</h1>
            </section>
        </div>    
    )
}

export default Header
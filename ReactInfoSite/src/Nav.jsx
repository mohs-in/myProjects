import React from 'react'
import reactLogoSmall from './assets/react-icon-small.png'

export default function Nav() {
    return (
        <div className="nav-bar">
            <img src={reactLogoSmall} alt="React Logo" srcset="" />
            <h3 className="nav--heading">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </div>
    )
}
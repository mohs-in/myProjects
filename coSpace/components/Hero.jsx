import React from 'react'
import { getImageUrl } from './imgs.js';

function Tile(props) {
    let isEx 
    isEx = props.isExclusive;
    return(
        <section class="item">
            {
                (isEx) && <div className="item-banner">Exclusive</div>
            }
            <img src={getImageUrl(props.img)} class="item-img" alt={props.alt} />
            <div class="caption">
                <p>{props.desc}</p>
                <button className='btn'>Book</button>
            </div>
        </section> 
    )
}

export default Tile
import React from 'react'
import './CardGroup.css'
import { useState } from 'react'

export default function CardGroup({ options }) {

    const [CardID, setCardID] = useState(-1);

    function handleClick(e, id) {
        setCardID(id);
    }

    return (
        <div className="row">
            {
                options.map((card, index) => (
                    <div className='col'>
                        <div key={index} className={`cardGroup ${CardID === index ? 'active' : ''}`} onClick={(e) => handleClick(e, index)}>
                            <i className={`${card.icon} fs-1`}></i>
                            <p className='text-truncate'>{card.text}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

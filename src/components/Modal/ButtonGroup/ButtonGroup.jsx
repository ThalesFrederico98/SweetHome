import React from 'react'
import './ButtonGroup.css'
import { useState } from 'react'

export default function ButtonGroup({ buttons }) {

    const [ClickedID, setClickedID] = useState(-1);

    function handleClick(e, id) {
        setClickedID(id);
    }

    return (
        <div className="row mb-4">
            {
                buttons.map((buttonLabel, index) => (
                    <div key={index} className={index === 0 ? 'w100 col-3' : 'w100 col'}>
                        <button key={index} className={`btn-especial ${ClickedID === index ? 'active' : ''}`} onClick={(e) => handleClick(e, index)}>
                            {buttonLabel}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

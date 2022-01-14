import React, { useState } from 'react'
import '../App.css'
import League from './League'
import Standing from './Standing'

export const Content = () => {

    const [active, setActive] = useState(true);
    return (
        <div className='content-container'>
            <div className='tabs'>
                <div className='tab-leagues' onClick={() => setActive(true)}>
                    <h2 style={{color: active ? '#cccc' : null}}>Leagues</h2>
                </div>
                <div className='tab-standings' onClick={() => setActive(false)}>
                    <h2 style={{color: !active ? '#cccc' : null}}>Standings</h2>
                </div>
            </div>

            { active ? <League /> : <Standing />}
        </div>
    )
}

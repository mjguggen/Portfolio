import React from 'react'

import headshot from '../assets/mike-headshot.jpeg'

const LeftNav = () => (
    
    <div className="leftNav btn">
        <a 
            className="leftNav_headshot"
            target="_blank"
            href="https://www.linkedin.com/in/mike-guggenbuehl/"
        >
            <div className="headshot_wrap">
                <img
                    alt="img"
                    src={headshot}
                    className="headshot"
                />
            </div>
        </a>
    </div>
)

export default LeftNav
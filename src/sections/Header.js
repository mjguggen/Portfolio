import React from 'react'

import Blob from '../components/Blob'

const Header = (props) => (
    <div className="header" id="header">
        <Blob
            width={props.width}
            height={props.height}
            top={true}
        />

        <div className="header_box" id="header_box">
            <div className="header_text_top">
                <div className="header_title">Hey, I'm Mike!</div>
                <div className="header_sub-title">I'm a Software Engineer based in Minneapolis, MN</div>
            </div>

            <div className="header_text_bottom">
                <div className="header_title">Hey, I'm Mike!</div>
                <div className="header_sub-title">I'm a Software Engineer based in Minneapolis, MN</div>
            </div>
            
        </div>
    </div>
)


export default Header
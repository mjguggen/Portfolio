import React, {useState} from 'react'


const NavRight = () => {

    const [active, setActive] = useState(false)

    return (
        <div className="rightNav">
            <div className="toggle btn">
                
                <div className="toggle_bullet toggle_left"/>
                <div className="toggle_bullet toggle_middle"/>
                <div className="toggle_bullet toggle_right"/>

                <div className="toggle_bullet toggle_bullet_behind toggle_left"/>
                <div className="toggle_bullet toggle_bullet_behind  toggle_middle"/>
                <div className="toggle_bullet toggle_bullet_behind  toggle_right"/>

            </div>
        </div>
    )

}

export default NavRight
import React, {useState, Fragment} from 'react'

import headshot from '../assets/mike-headshot.jpeg'

const Nav = () => {
    const [active, setActive] = useState(false)

    const toggleNav = () => {
        setActive(!active)
    }

    const links = [
        {href: '#work', color: '#4657a3', text: 'Work'},
        {href: '#skills', color: '#3f4e91', text: 'Skills'},
        {href: '#projects', color: '#323e72', text: 'Projects'},
        {href: '#contact', color: '#1f2649', text: 'Contact'},
    ]

    return (
        <Fragment>
            <div className="nav navFront" id="navFront">

                <div className="leftNav btn">
                    <a 
                        className="leftNav_headshot"
                        target="_blank"
                        href="https://www.linkedin.com/in/mike-guggenbuehl/"
                    >
                        <div
                            className="leftNav_bg"
                        />
                        <div className="headshot_wrap">
                            <img
                                alt="img"
                                src={headshot}
                                className="headshot"
                            />
                        </div>
                    </a>
                </div>

                <div className="rightNav">
                    <div 
                        className="toggle btn"
                        onClick={() => toggleNav()}
                    >
                        <div 
                            className="toggle_bullet"
                            style={{
                                left: 0,
                                right: 0,
                                margin: 'auto auto',
                                marginLeft: 10,
                                width: active ? 40 : 10,
                                height: active ? 5 : 10,
                                opacity: active ? 1 : .7,
                                transform: active
                                    ? 'rotate(45deg)'
                                    : 'rotate(0deg)'
                            }}
                        />
                        <div 
                            className="toggle_bullet"
                            style={{
                                opacity: active ? 0 : .7
                            }}
                        />
                        <div 
                            className="toggle_bullet"
                            style={{
                                left: 0,
                                right: 0,
                                margin: 'auto auto',
                                marginRight: 10,
                                opacity: active ? 1 : .7,
                                width: active ? 40 : 10,
                                height: active ? 5 : 10,
                                transform: active
                                    ? 'rotate(-45deg)'
                                    : 'rotate(0deg)'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="nav navBack" id="navBack">
                <div className="leftNav btn">
                    <div
                        className="leftNav_headshot"
                    >
                        <div
                            className="leftNav_bg"
                        />
                        <div className="headshot_wrap">
                            <img
                                // alt="img"
                                // src={headshot}
                                className="headshot"
                            />
                        </div>
                    </div>
                </div>

                <div className="rightNav">
                    <div className="toggle btn">
                        <div 
                            className="toggle_bullet"
                            style={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                margin: 'auto auto',
                                marginLeft: 10,
                                width: active ? 40 : 10,
                                transform: active
                                    ? 'rotate(45deg)'
                                    : 'rotate(0deg)'
                            }}
                        />
                        <div 
                            className="toggle_bullet"
                            style={{
                                opacity: active ? 0 : .7,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                margin: 'auto auto'
                            }}
                        />
                        <div 
                            className="toggle_bullet"
                            style={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                margin: 'auto auto',
                                marginRight: 10,
                                width: active ? 40 : 10,
                                transform: active
                                    ? 'rotate(-45deg)'
                                    : 'rotate(0deg)'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="navMenu">
                <div>
                    <div 
                        className="filler"
                        style={{
                            transition: 'transform .2s',
                            transform: active ? 'rotate(44deg)' : 'rotate(0deg)'
                        }}
                    />

                    {
                        links.map((i , index) => {
                            return (
                                <a
                                    className="link"
                                    style={{
                                        transition: `transform ${.3 + (index * .1)}s`,
                                        transform: active ? `rotate(${50 + (index*5)}deg)` : 'rotate(0deg)',
                                        width: 225 / Math.cos((Math.PI / 180) * (50 + (index*5))),
                                        zIndex: 199 - index,
                                        background: i.color,
                                        paddingRight: (index * 15) + 40,
                                        paddingBottom: index + 2
                                    }}
                                    href={i.href}
                                    onClick={() => toggleNav()}
                                    key={`nav-${i.text}`}
                                >
                                    {i.text}
                                </a>
                            )
                            
                        })
                    }

                    {
                        <div
                            style={{
                                height: '100%',
                                width: '100%',
                                position: 'fixed',
                                background: 'black',
                                top: 0,
                                left: 0,
                                zIndex: 100,
                                pointerEvents: active ? 'auto' : 'none',
                                opacity: active ? .7 : 0,
                                backdropFilter: 'blur(20px)'                            
                            }}
                            className="bg-overlay"
                            onClick={() => toggleNav()}
                        >

                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Nav
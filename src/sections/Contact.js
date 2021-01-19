import React, {useState} from 'react'
import blobs from 'blobs'
import { useSpring, config, animated } from "react-spring";
import {Spring, Transition, Keyframes,} from 'react-spring/renderprops'


import Blob from '../components/Blob'

const Contact = (props) => {

    const options = {
        complexity: 1,
        contrast: .15,
        size: props.height > props.width
            ? props.height * 2
            : props.width * 2
        ,
        color: "none",
    };


    const [paths, setPaths] = useState([
        blobs.editable(options).children[0].children[0].attributes.d,
        blobs.editable(options).children[0].children[0].attributes.d
    ])
    
    

    const goNext = () => {
        setPaths([
            ...paths,
            blobs.editable(options).children[0].children[0].attributes.d,
        ])
    }

    return (
        <div id="contact">

            <div 
                style={{
                    width: '100%',
                    maxWidth: 500,
                    margin: '0px auto',
                    padding: '0px 20px 100px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 100,
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // flexGrow: 1,
                }}
            >
                <div class="sectionTitle">
                    Contact
                </div>

                <div className="line divider-lg" />
                <form className="contact-form" action="https://formspree.io/mvobgwkn" method="POST">
                    <input type="text" placeholder="Name*" name="Name" className="contact-el" required/>
                    <br/>

                    <input 
                        type="email" 
                        placeholder="Email*" 
                        name="Email" 
                        className="contact-el" 
                        required
                    />
                    <br/>

                    <input 
                        type="text" 
                        placeholder="Subject*" 
                        name="Subject" 
                        className="contact-el" 
                        required
                    />

                    <br/>

                    <textarea 
                        className="contact-el" 
                        placeholder="Type your message here." 
                        name="message" 
                    />

                    <br/>

                    <input type="submit" className="contact-button btn" value="SEND"/>
                </form>
            </div>

            <div className="footer">
                <div className="footer_text">© Mike Guggenbuehl 2021</div>
            </div>
            


            <div
                className='blob-container'
            >
                <Spring
                    from={{
                        d: paths[paths.length - 2]
                    }}
                    to={{
                        d: paths[paths.length - 1]
                    }} 
                    clamp={true}
                    reset
                    config={{
                        mass: 100,
                        tension: 5000,
                        friction: 2000,
                        // duration: 1000,
                    }}
                    onRest={() => goNext()}
                >
                    {
                        props => {
                            return (
                                <svg 
                                    className={'blob-wrapper2'}
                    
                                >
                                    <defs>
                                        <radialGradient id="radial-gradient" cx="10%" fx="10%" fr="0%" r="80%">
                                            <stop offset="0%" stop-color="#5568C3" />
                                            <stop offset="100%" stop-color="#27336F" />
                                        </radialGradient>
                                    </defs>

                                    
                                    <g className="blob" id="blob">
                                        <animated.path 
                                            // transform="translate(0,0)"
                                            transform-origin="50% 50%"
                                            class="blob-gradient" 
                                            d={props.d} 
                                        />
                                    </g>
                                </svg>
                            )

                        }
                    }
                </Spring>
            </div>

        </div>
    )

}

export default Contact
import React, {useState, useEffect, Fragment} from 'react'
import blobs from 'blobs'
import { useSpring, config, animated } from "react-spring";
import {Spring, Transition, Keyframes,} from 'react-spring/renderprops'


const Blob = (props) => {

    const options = {
        complexity: 1,
        contrast: .1,
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
                                className={'blob-wrapper'}
                                id="blob-wrapper"
                            >
                                <defs>
                                    <radialGradient id="radial-gradient" cx="10%" fx="10%" fr="0%" r="80%">
                                        <stop offset="0%" stopColor="#5568C3" />
                                        <stop offset="100%" stopColor="#27336F" />
                                    </radialGradient>
                                </defs>

                                
                                <g className="blob" id="blob">
                                    <animated.path 
                                        // transform="translate(0,0)"
                                        transform-origin="50% 50%"
                                        className="blob-gradient" 
                                        d={props.d} 
                                    />
                                </g>
                            </svg>
                        )

                    }
                }
            </Spring>
        </div>
        
    )

}

export default Blob
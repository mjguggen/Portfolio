import React, {useState, useEffect, Fragment} from 'react'
import blobs from 'blobs'
import { useSpring, config, animated } from "react-spring";
import {Spring, Transition, Keyframes,} from 'react-spring/renderprops'


const Blob = (props) => {
    const top = props.top

    console.log(top)

    const mobile = props.width < props.height ? true : false

    const vmax = mobile 
        ? props.height * (top ? 3 : 3)
        : props.height * (top ? 3 : 3)


    const options = {
        complexity: 1,
        contrast: .1,
        size: vmax < 500 
            ? 500
            : vmax,
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

        <Spring
            from={{
                d: paths[paths.length - 2]
            }}
            to={{
                d: paths[paths.length - 1]
            }} 
            // clamp={true}
            reset
            config={{
                mass: 50,
                tension: 5000,
                friction: 2000,
            }}
            onRest={() => goNext()}
        >
            {
                props => {
                    return (
                        <svg 
                            className={'blob-wrapper'}
                            id="blob-wrapper"
                            style={{
                                bottom: 0,
                                top: top ? '-175%' : '250%',
                                margin: 'auto auto',
                                height: vmax,
                                width: vmax,
                                minHeight: 500,
                                minWidth: 500,
                            }}
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
                                    // transform-origin="50% 50%"
                                    className="blob-gradient" 
                                    d={props.d} 
                                />
                            </g>
                        </svg>
                    )

                }
            }
        </Spring>        
    )
}

export default Blob
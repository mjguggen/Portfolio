import React from 'react'

import apple from '../assets/icons/apple.png'
import android from '../assets/icons/android.png'
import web from '../assets/icons/web.png'
import {skills} from '../utils/info'

const Project = props => (
    <div 
        className="project"
        key={`project-title-${props.project}`}
    >
        <div className="project-title-container">
            <div className="project-title-wrap">
                <div className="project-title"> {props.project} </div>
                <div className="project-subheader"> {props.subTitle} </div>
            </div>

            <div className="line-vert"/>

            {
                props.platforms.ios
                    ? 
                        <img
                            src={apple}
                            alt="ios"
                            className="project-type"
                        />
                    : null
            }

            {
                props.platforms.android
                    ? 
                        <img
                            src={android}
                            alt="android"
                            className="project-type"
                        />
                    : null
            }

            {
                props.platforms.web
                    ? 
                        <img
                            src={web}
                            alt="web"
                            className="project-type"
                        />
                    : null
            }
        </div>
        

        <div className="project-bottom">
            <div className="project-left">
                <div className="project-description"> {props.description} </div>

                <div className="project-stack">
                    <div className="sub-title">
                        TECH STACK
                    </div>
                    <div className="icon-container">
                        {
                            props.stack.map((i, index) => {
                                return (
                                    <img
                                        src={skills.filter(j => j.name === i)[0].img}
                                        className="project-icon"
                                        alt={i}
                                        key={`imgkey-${i}-${index}`}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="description-link-wrapper">
                    {
                        props.platforms.ios
                            ?
                                <a 
                                    className="description-link btn" 
                                    href={props.links.ios}
                                    target="_blank" 
                                    rel='noreferrer'
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png"
                                        alt="ios"
                                    />
                                </a>
                            : null
                    }

                    {
                        props.platforms.android
                            ?
                                <a 
                                    className="description-link btn" 
                                    href={props.links.android}
                                    target="_blank" 
                                    rel='noreferrer'
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                                        alt="android"
                                    />
                                </a>
                            : null
                    }

                    {
                        props.platforms.web
                            ?
                                <a 
                                    className="description-link web-link  btn" 
                                    href={props.links.web}
                                    target="_blank" 
                                    rel='noreferrer'
                                >
                                    Website
                                </a>
                            : null
                    }

                </div>
            </div>

            <div className="project-right" >
                <img src={props.image} className="project-image" alt={props.project}/>
            </div>
        </div>
    </div>
)

export default Project
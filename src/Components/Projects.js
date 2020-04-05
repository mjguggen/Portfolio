import React from 'react';

import weather from '../Assets/Projects/weather.png'
import drumpad from '../Assets/Projects/drumpad.png'
import stockInfo from '../Assets/Projects/stock_info.png'

const reactImg = ("https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png")
const sassImg = ("https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg")
const htmlImg = ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png")
const cssImg = ("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png")
const jsImg = ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png")


const Projects = (props) => {
    return (
        <div className="page" id="projects">
            <div className="container">
                <h1>PROJECTS</h1>

                <div className="project project2" id="project-weather">
                    <div className="project-description-box fade-in" >
                        <div className="project-title"> WEATHER FORECAST</div>
                        <div className="project-subheader"> Find the weather for any location</div>
                        <div className="project-description">The Weather Forecast web app shows the upcoming weather forecast and loads a background that matches the current weather based on a users input. </div>
                        <div className="project-tech">
                            TECH STACK |
                            <div className="icon-container">
                                <img src={reactImg} id="project-icon"/>
                                <img src={sassImg} id="project-icon"/>
                                <img src={htmlImg} id="project-icon"/>
                                <img src={cssImg} id="project-icon"/>
                                <img src={jsImg} id="project-icon"/>
                            </div>
                        </div>
                        <div className="description-link-wrapper">
                            <a className="description-link" href="https://github.com/mjguggen/Weather-Forecast" target="_blank">Github</a>
                            <a className="description-link" href="https://mjguggen.github.io/Weather-Forecast/" target="_blank">Website</a>
                        </div>
                    </div>
                    <div className="project-image-box fade-in">
                        <a href="https://mjguggen.github.io/Weather-Forecast/" target="_blank">
                            <img src={weather} className="project-image"/>
                        </a>
                    </div>
                </div>

                <div className="bar"/>

                <div className="project">
                    <div className="project-image-box fade-in">
                        <a href="https://mjguggen.github.io/Stock-Info/" target="_blank">
                            <img src={stockInfo} className="project-image"/>
                        </a>
                    </div>
                    <div className="project-description-box fade-in" >
                        <div className="project-title"> STOCK INFO</div>
                        <div className="project-subheader"> Get information on publically traded companies</div>
                        <div className="project-description">The Stock Info app allows you to get information on publically traded companies including current price, charts, statistics, and news. </div>
                        <div className="project-tech">
                            TECH STACK |
                            <div className="icon-container">
                                <img src={reactImg} id="project-icon"/>
                                <img src={sassImg} id="project-icon"/>
                                <img src={htmlImg} id="project-icon"/>
                                <img src={cssImg} id="project-icon"/>
                                <img src={jsImg} id="project-icon"/>
                            </div>
                        </div>
                        <div className="description-link-wrapper">
                            <a className="description-link" href="https://github.com/mjguggen/Stock-Info" target="_blank">Github</a>
                            <a className="description-link" href="https://mjguggen.github.io/Stock-Info/" target="_blank">Website</a>
                        </div>
                    </div>
                </div>

                <div className="bar"/>

                <div className="project project2">
                    <div className="project-description-box fade-in" >
                        <div className="project-title"> DRUM PAD</div>
                        <div className="project-subheader"> Virtual MPD</div>
                        <div className="project-description">Combining my passion for music and coding, I created a virtual version of the MPD218 drum machine which features two different drum kits. </div>
                        <div className="project-tech">
                            TECH STACK |
                            <div className="icon-container">
                                <img src={reactImg} id="project-icon"/>
                                <img src={htmlImg} id="project-icon"/>
                                <img src={cssImg} id="project-icon"/>
                                <img src={jsImg} id="project-icon"/>
                            </div>
                        </div>
                        <div className="description-link-wrapper">
                            <a className="description-link" href="https://github.com/mjguggen/Drum-Pad" target="_blank">Github</a>
                            <a className="description-link" href="https://mjguggen.github.io/Drum-Pad/" target="_blank">Website</a>
                            
                        </div>
                    </div>
                    <div className="project-image-box fade-in">
                        <a href="https://mjguggen.github.io/Drum-Pad/" target="_blank">
                            <img src={drumpad} className="project-image"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects
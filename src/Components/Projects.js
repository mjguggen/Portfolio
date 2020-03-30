import React from 'react';

import DrumPadBG from '../Assets/drumpad_background.jpg'
import StockInfoBG from '../Assets/stockinfo_background.jpg'
import Weather from '../Assets/weather_background.jpg'





const reactImg = ("https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png")
const sassImg = ("https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg")
const htmlImg = ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png")
const cssImg = ("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png")
const jsImg = ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png")


const Projects = (props) => {


    return(
        <div className="page" id="projects">
            <div className="container">
                <h1>My Projects</h1>

                <div className="project-container">

                    <div>
                    <a className="project-box fade-in" href="https://mjguggen.github.io/Drum-Pad/" target="_blank">
                        <div className="project-title">DRUMPAD</div>
                        <img src={DrumPadBG} className="project-image"/>
                        <div className="icon-container">
                            <img src={reactImg} id="project-icon"/>
                            <img src={htmlImg} id="project-icon"/>
                            <img src={cssImg} id="project-icon"/>
                            <img src={jsImg} id="project-icon"/>
                        </div>
                        <div className="description-wrapper">
                            <div className="project-description">Combining my passion for music and coding, I created a virtual version of the MPD218 drum machine using React.
                                <div className="description-link-wrapper">
                                    <a className="descrption-link" href="https://github.com/mjguggen/Drum-Pad" target="_blank">Github</a>
                                    <a className="descrption-link" href="https://mjguggen.github.io/Drum-Pad/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>


                    </a>
                    </div>

                    <a className="project-box fade-in" href="https://mjguggen.github.io/Stock-Info/" target="_blank">
                        <div className="project-title">STOCK INFO</div>
                        <img src={StockInfoBG} className="project-image"/>
                        <div className="icon-container">
                            <img src={reactImg} id="project-icon"/>
                            <img src={htmlImg} id="project-icon"/>
                            <img src={sassImg} id="project-icon"/>
                            <img src={cssImg} id="project-icon"/>
                            <img src={jsImg} id="project-icon"/>
                        </div>
                        <div className="description-wrapper">
                            <div className="project-description"> I created a web application that allows you to check the price and information of publically traded companies.

                                <div className="description-link-wrapper">
                                    <a className="descrption-link" href="https://github.com/mjguggen/Stock-Info" target="_blank">Github</a>
                                    <a className="descrption-link" href="https://mjguggen.github.io/Stock-Info/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="project-box fade-in" href="https://mjguggen.github.io/Weather-Forecast/" target="_blank">
                        <div className="project-title">WEATHER FORECAST</div>
                        <img src={Weather} className="project-image"/>
                        <div className="icon-container">
                            <img src={reactImg} id="project-icon"/>
                            <img src={htmlImg} id="project-icon"/>
                            <img src={sassImg} id="project-icon"/>
                            <img src={cssImg} id="project-icon"/>
                            <img src={jsImg} id="project-icon"/>
                        </div>
                        <div className="description-wrapper">
                            <div className="project-description"> I built a weather search application that loads a background that matches the weather of your search location.

                                <div className="description-link-wrapper">
                                    <a className="descrption-link" href="https://github.com/mjguggen/Weather-Forecast" target="_blank">Github</a>
                                    <a className="descrption-link" href="https://mjguggen.github.io/Weather-Forecast/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}


export default Projects
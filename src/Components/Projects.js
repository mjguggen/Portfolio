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

                <div className="project-bar"/>

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

                <div className="project-bar"/>

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


/*
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
*/

export default Projects
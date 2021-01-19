import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import weather from '../assets/Projects/weather.png'
import neonTrivia from '../assets/Projects/neon_trivia.png'
import chronicle from '../assets/Projects/chronicle.png'
import mikesStocks from '../assets/Projects/mikes_stocks.png'
import betterBuyer from '../assets/Projects/better_buyer.png'
import apple from '../assets/icons/apple.png'
import android from '../assets/icons/android.png'
import web from '../assets/icons/web.png'

import {skills} from '../utils/skills'

const projectArr = [
    {
        project: "Better Buyer",
        subTitle: "The original swipe to buy app",
        image: betterBuyer,
        platforms: {
            ios: true,
            android: true,
            web: false,
        },
        description: "Better Buyer is cross-platform retail app featuring a unique swipe-to-buy feature ala Tinder meets Best Buy. It allows you to toggle between seven different product categories and purchase products in-app. Products and data are sourced from the Best Buy API.",
        stack: [
            "react",
            "reactNative",
            "redux",
            "reactNavigation",
            "nodeJS",
            // "Heroku",
            "express",
            "git",
            "gitHub"
        ],
        links: {
            ios: "https://testflight.apple.com/join/QVkJqmc9",
            android: "https://play.google.com/store/apps/details?id=com.mjguggen.BetterBuyer",
            web: "",
        }
    },
    {
        project: "Chronicle",
        subTitle: "Track your daily wellness",
        image: chronicle,
        platforms: {
            ios: true,
            android: true,
            web: false,
        },
        description: "Chronicle is a cross platform wellness trackng app built using React Native. It allows you to track your mental wellbeing, diet, sleep, exercise, activities, and overall health management, giving you ability view your wellness data over time.",
        stack: [
            "react",
            "reactNative",
            "redux",
            "reactNavigation",
            "git",
            "gitHub"
        ],
        links: {
            ios: "https://apps.apple.com/us/app/chronicle-daily-wellness/id1530116288",
            android: "https://play.google.com/store/apps/details?id=com.guggen.chronicle&hl",
            web: "",
        }
    },
    {
        project: "Mike's Stocks",
        subTitle: "Apple stocks Emulation",
        image: mikesStocks,
        platforms: {
            ios: true,
            android: true,
            web: false,
        },
        description: "Using the native iOS Stocks app UX/UI as inpsiration, Mike's Stocks allows users to create a stock watchlist, view stock charts and data, and get the latest financial news. All financial data is sourced from iEX cloud.",
        stack: [
            "react",
            "reactNative",
            "redux",
            "reactNavigation",
            "nodeJS",
            // "Heroku",
            "express",
            "git",
            "gitHub"
        ],
        links: {
            ios: "https://testflight.apple.com/join/nuTebWOb",
            android: "https://play.google.com/store/apps/details?id=com.mjguggen.stonks",
            web: "",
        }
    },
    {
        project: "Weather Forecast",
        subTitle: "Get the latest weather conditions",
        image: weather,
        platforms: {
            ios: false,
            android: false,
            web: true,
        },
        description: "The Weather Forecast app allows you get the current weather conditions and upcoming weather forecast. Based on the location the user inputs, a background dynamically loads that matches the current weather conditions.",
        stack: [
            "react",
            "git",
            "gitHub"
        ],
        links: {
            ios: "",
            android: "",
            web: "https://mjguggen.github.io/Weather-Forecast/",
        }
    },
    {
        project: "Neon Trivia",
        subTitle: "Trivia, with a Neon Theme",
        image: neonTrivia,
        platforms: {
            ios: false,
            android: false,
            web: true,
        },
        description: "Neon Trivia allows you to play a multiplayer trivia game with your friends. Questions are sourced from the jService API",
        stack: [
            "react",
            "git",
            "gitHub"
        ],
        links: {
            ios: "",
            android: "",
            web: "https://mjguggen.github.io/NeonTrivia/",
        }
    },
]

const Projects = () => {
    const projectMap = () => projectArr.map((i, index) => {
        return (
            <div className="project">
                <div className="project-title-container">
                    <div className="project-title-wrap">
                        <div className="project-title"> {i.project} </div>
                        <div className="project-subheader"> {i.subTitle} </div>
                    </div>

                    <div className="line-vert"/>

                    {
                        i.platforms.ios
                            ? 
                                <img
                                    src={apple}
                                    alt="ios"
                                    className="project-type"
                                />
                            : null
                    }

                    {
                        i.platforms.android
                            ? 
                                <img
                                    src={android}
                                    alt="android"
                                    className="project-type"
                                />
                            : null
                    }

                    {
                        i.platforms.web
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
                        <div className="project-description"> {i.description} </div>

                        <div className="project-stack">
                            <div className="sub-title">
                                TECH STACK
                            </div>
                            <div className="icon-container">
                                {
                                    i.stack.map((i) => {
                                        return (
                                            <img
                                                src={skills.filter(j => j.name === i)[0].img}
                                                className="project-icon"
                                                alt={i}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="description-link-wrapper">
                            {
                                i.platforms.ios
                                    ?
                                        <a 
                                            className="description-link btn" 
                                            href={i.links.ios}
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
                                i.platforms.android
                                    ?
                                        <a 
                                            className="description-link btn" 
                                            href={i.links.android}
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
                                i.platforms.web
                                    ?
                                        <a 
                                            className="description-link web-link  btn" 
                                            href={i.links.web}
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
                        <img src={i.image} className="project-image" alt={i.project}/>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="projects" id="projects">
            <div className="sectionTitle">
                Projects
            </div>

            <div className="line divider-lg" />

            <Carousel
                infiniteLoop={true}
                background="transparent"
                showStatus={false}
            >
                {projectMap()}
            </Carousel>
        </section>
    )
}

export default Projects
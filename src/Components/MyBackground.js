import React from 'react'
import ui from '../Assets/ui-ux.svg'
import webdev from '../Assets/webdev.png'
import webdev2 from '../Assets/webdev2.png'
import digitalMarketing from '../Assets/digital-marketing.svg'
import mixer from '../Assets/mixer.png'



const MyBackground = props => (
    <div className="page" id="my-background">

        <div className="container">
            <h1>ABOUT ME</h1>
            <div className="mybg-subheader fade-in">With digital marketing experience for Fortune 100 companies and web development skills, I can help your team build better products that achieve your business goals.
            </div>

            <div className="mybg-wrapper">
                <div className="mybg-card fade-in">
                    
                    <div className="mybg-title">WEB DEVELOPMENT</div>
                    <div className="mybg-icon-container"> <img className="mybg-icon" id="web-dev-icon" src={webdev2}/></div>
                    <div className="mybg-text">I design web applications using React, Javascript, HTML, and CSS/SCSS.</div>
                </div>

                <div className="bar mobile"/>


                <div className="mybg-card fade-in">
                    <div className="mybg-title">UI/UX</div>
                    <div className="mybg-icon-container"> <img className="mybg-icon" src={ui}/></div>
                    <div className="mybg-text">I design user focused layouts that maximize usability and responsiveness.</div>
                </div>

                <div className="bar mobile"/>

                <div className="mybg-card fade-in">
                    <div className="mybg-title">MARKETING</div>
                    <div className="mybg-icon-container"> <img className="mybg-icon" src={digitalMarketing}/></div>
                    <div className="mybg-text">I have managed media campaigns for companies including: Walmart, Target, Hotwire.com, and Culligan Water. </div>
                </div>

                <div className="bar mobile"/>

                <div className="mybg-card fade-in">
                    <div className="mybg-title">MUSIC PRODUCTION</div>
                    <div className="mybg-icon-container"> <img className="mybg-icon" src={mixer}/></div>
                    <div className="mybg-text">I have produced, mixed, and mastered albums that have been streamed over 20 million times online.</div>
                </div>
            </div>


{/*
            <h1> BACKGROUND</h1>

            <div className='mybg-bar'/>

            <div className="mybg-list">
                <div className="dot-container fade-in">
                    <div className="dot "></div>
                    <div id='mybg-title'> STUDENT</div>
                </div>
                <div className="fade-in-slow" id="mybg-description" >I graduated from the University of Minnesota in spring of 2016 with a degree in Marketing and Digital Media studies. I've always been passionate about digital media and creating digital experiences.  </div>

                <div className="dot-container fade-in">
                    <div className="dot "></div>
                    <div id='mybg-title'>MARKETER </div>
                </div>
                <div className="fade-in-slow" id="mybg-description">I started my career working in the advertising industry as a media planner. My job role consisted of planning out clients advertising budgets, deciding the most effective mediums to reach their target audiences, and reporting and optimizing based on campaign results. Clients I've worked on include Walmart, Target, Hotwire.com, Culligan Water, and St. Jude's Children's Hospital. </div>

                <div className="dot-container fade-in">
                    <div className="dot"></div>
                    <div id='mybg-title'>MUSIC PRODUCER </div> 
                </div>
                <div className="fade-in-slow" id="mybg-description">Throughout my professional career I channeled by entrepreneurial spirit and built a budding career as a music producer on the side. I was one of the original artists signed to Chillhop Records (famous for their 24/7 beats to study/relax to radio station) and have amassed more than 20 million streams online. This has given me the opportunity to develop a dedicated fanbase and perform at venues throughout the country. Through this, I learned additional skills beyond just making music - including graphic design, video production, social media, and event planning.</div>

                <div className="dot-container fade-in">
                    <div className="dot"></div>
                    <div id='mybg-title'> WEB DEVELOPER </div>
                </div>
                <div className="fade-in-slow" id="mybg-description"> Looking to expand my skillset, I dove headfirst into learning web development in the fall of 2019. I have completed multiple courses on Udemy and FreeCodeCamp, as well as built my own personal projects. My primary focus has been on learning front end development with a focus on React.
                 </div>

            </div>
 */}
        </div>
    </div>
)



export default MyBackground
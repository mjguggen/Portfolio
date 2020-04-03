import React from 'react'



const MyBackground = props => (
    <div className="page" id="my-background">

        <div className="container">
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
                <div className="fade-in-slow" id="mybg-description">I started my career working in the advertising industry in media planning. My job role consisted of planning out clients advertising budgets, deciding the most effective mediums to reach their target audiences, and reporting and optimizing based on campaign results. Clients I've worked on include Walmart, Target, Hotwire.com, Culligan Water, and St. Jude's Children's Hospital. </div>

                <div className="dot-container fade-in">
                    <div className="dot"></div>
                    <div id='mybg-title'>MUSIC PRODUCER </div> 
                </div>
                <div className="fade-in-slow" id="mybg-description">Throughout my professional career I also built a budding career as a music producer. I was one of the original artists signed to Chillhop Records (famous for their 24/7 beats to study/relax to radio station). I been lucky enough to have the opportunity to perform at venues throughout the country and develop a dedicated fanbase online.</div>

                <div className="dot-container fade-in">
                    <div className="dot"></div>
                    <div id='mybg-title'> WEB DEVELOPER </div>
                </div>
                <div className="fade-in-slow" id="mybg-description"> In the fall of 2019 I left my career and decided to travel throughout Europe for three months. During this adventure I took some time to think about what I'm best at and where my skills would best fit in a career. I'm a mix of creative and analytical, which led me to land on web development. I dove head first into development by taking classes on Udemy and FreeCodeCamp, as well as building my own projects. </div>

            </div>

        </div>
    </div>
)



export default MyBackground
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
                <div className="fade-in-slow" id="mybg-description">Throughout my professional career I channeled by entrepreneurial spirit and built a budding career as a music producer on the side. I was one of the original artists signed to Chillhop Records (famous for their 24/7 beats to study/relax to radio station) and have amassed more than 20 million streams online. This has given me the opportunity to develop a dedicated fanbase and perform at venues throughout the country. Through this, I learned additional skills beyond just making music, including graphic design, video production, social media, and event planning.</div>

                <div className="dot-container fade-in">
                    <div className="dot"></div>
                    <div id='mybg-title'> WEB DEVELOPER </div>
                </div>
                <div className="fade-in-slow" id="mybg-description"> Looking to expand my skillset, I dove headfirst into learning web development in the fall of 2019. I have completed multiple courses on Udemy and FreeCodeCamp, as well as built my own personal projects. My primary focus has been on learning front end development with a focus on React.
                 </div>

            </div>

        </div>
    </div>
)



export default MyBackground
import React from 'react'

const jobs = [
    {
        company: "WebMD",
        time: "Oct 2020 - Current",
        position: "Web Developer",
        bullets: [
            "Built and maintained event registration portals for the MedscapeLIVE! virtual healthcare conference platform",
            "Managed content updates to active registration portals and platform-generated emails",
            "Delivered projects within production SLAs and in accordance with client requirements and company standards",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png"
    },
    {
        company: "Freelance",
        time: "Jan 2020 - Current",
        position: "Web/Native Developer",
        bullets: [
            "Revamped UI/UX for websites by creating user-friendly, responsive designs",
            "Translated wireframes into interactive features using HTML, CSS, and JavaScript",
            "Tested and debugged applications to ensure applications were optimized for speed and functionality"
        ],
        logo: "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
    },
    {
        company: "Guggenz",
        time: "Jan 2016 - Current",
        position: "Music Producer",
        bullets: [
            "Produced, mixed, and mastered music that has been streamed more than 25 million times online",
            "Developed brand identity by designing logo and merchandise and grew engagement through managing social media platforms, email marketing campaigns, and collaborating with other artists and record labels",
            "Toured and performed at events around the country in cities including: Minneapolis, New York City, Chicago, Philadelphia, Denver, Los Angeles, and San Francisco"
        ],
        logo: "https://static1.squarespace.com/static/5cab5a23523958b22999091f/t/5d48afb4afa2a6000182dd61/1572187390697/"
    },
    {
        company: "Fallon",
        time: "Aug 2018 – Jul 2019",
        position: "Media Planner",
        bullets: [
            "Led The Hotwire Effect Series partnership between Hotwire and DraftKings, which included: managing project timelines to ensure deadlines were met, reviewing assets to ensure brand guidelines were followed, and guiding communications with legal teams to establish proper app terms",
            "Led communication with clients, vendors, creative agencies, and internal partners",
            "Executed and optimized media plans while maintaining campaign flowcharts, budget summaries, and reporting data"
        ],
        logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQHYTQHyeFQJpQ/company-logo_200_200/0?e=2159024400&v=beta&t=FyrxhRQuhNx-c_-GSTAFgQSOVKxMmvFcvy8MYyt-kpQ"
    },
    {
        company: "Haworth Marketing",
        time: "May 2017 – Aug 2018",
        position: "Media Planner",
        bullets: [
            "Planned, executed, and optimized media plans of $100M+ across TV, Digital Video, Radio, and Audio Streaming mediums",
            "Led data initiatives, including: verifying measurement methodology, identifying KPIs, building metadata databases, and ensuring data integrity",
            "Managed growth and development of assistant planners"
        ],
        logo: "https://media.licdn.com/dms/image/C4E0BAQFIcDAm5HsSOg/company-logo_200_200/0?e=2159024400&v=beta&t=SnLNxYfcJN-mM4sF62alSc0uTEmw_ZD1pKM4osMoKbw"
    },
    {
        company: "GroupM",
        time: "Jun 2016 – May 2017",
        position: "Assistant Media Planner",
        bullets: [
            "Coordinated weekly deliverables including: status reports, campaign overviews, competitive reports, flowcharts, and budget summaries",
            "Oversaw trafficking of campaign creative to ensure assets were shipped and received before deadlines",
            "Evaluated media partners to determine relevance to target audience profile"
        ],
        logo: "https://www.exchangewire.com/wp-content/uploads/2019/06/groupm.png"
    },
    {
        company: "Thomson Reuters",
        time: "Jun 2015 – Sep 2015",
        position: "Marketing and Data Intern",
        bullets: [

        ],
        logo: "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1397191966/68aa3a98f81f5e09a3afb00a73461434.png"
    },
]

const Work = () => (
    <section className="work" id="work">
        <div className="sectionTitle">
            Work
        </div>

        <div className="line divider-lg" />

        <div className="work-container">
            <div className="work-bar"/>

            {
                jobs.map(i => (
                    <div className="job">
                        <div className="bullet">
                            <div className="bullet-inner"/>
                        </div>

                        <div className="role">
                            <div className="role-wrap">
                                <div className="work-logo-wrap">
                                    <img
                                        src={i.logo}
                                        alt={i.company}
                                        className="work-logo"
                                    />
                                </div>


                                <div className="position">
                                    {i.position}
                                </div>

                                <div className="line-vert"/>

                                <div className="company_wrap">
                                    <div className="company">
                                        
                                        {i.company}
                                    </div>

                                    <div className="time">
                                        {i.time}
                                    </div>
                                </div>

                            </div>

                            <ul className="description">
                                {i.bullets.map(j => (
                                    <li>
                                        {j}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
)

export default Work
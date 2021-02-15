import React from 'react'

const jobs = [
    {
        company: "Best Buy",
        time: "Feb 2021 - Current",
        position: "Associate Digital Engineer",
        bullets: [
        ],
        logo: "https://cdn.vox-cdn.com/thumbor/Lf9aj9A_nn0uScv_yetBXFf8YAA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10806197/2018_rebrand_blog_logo_LEAD_ART.jpg"
    },
    {
        company: "WebMD",
        time: "Oct 2020 - Feb 2021",
        position: "Web Developer",
        bullets: [
            /*
            "Built and maintained event registration portals for the MedscapeLIVE! virtual healthcare conference platform",
            "Managed content updates to active registration portals and platform-generated emails",
            "Delivered projects within production SLAs and in accordance with client requirements and company standards",
            */
        ],
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png"
    },
    {
        company: "Freelance",
        time: "Jan 2020 - Current",
        position: "Web/Native Developer",
        bullets: [
            /*
            "Revamped UI/UX for websites by creating user-friendly, responsive designs",
            "Translated wireframes into interactive features using HTML, CSS, and JavaScript",
            "Tested and debugged applications to ensure applications were optimized for speed and functionality"
            */
        ],
        logo: "https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
    },
    {
        company: "Fallon",
        time: "Aug 2018 – Jul 2019",
        position: "Media Planner",
        bullets: [
            /*
            "Led The Hotwire Effect Series partnership between Hotwire and DraftKings, which included: managing project timelines to ensure deadlines were met, reviewing assets to ensure brand guidelines were followed, and guiding communications with legal teams to establish proper app terms",
            "Led communication with clients, vendors, creative agencies, and internal partners",
            "Executed and optimized media plans while maintaining campaign flowcharts, budget summaries, and reporting data"
            */
        ],
        logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQHYTQHyeFQJpQ/company-logo_200_200/0?e=2159024400&v=beta&t=FyrxhRQuhNx-c_-GSTAFgQSOVKxMmvFcvy8MYyt-kpQ"
    },
    {
        company: "Haworth Marketing",
        time: "May 2017 – Aug 2018",
        position: "Media Planner",
        bullets: [
            /*
            "Planned, executed, and optimized media plans of $100M+ across TV, Digital Video, Radio, and Audio Streaming mediums",
            "Led data initiatives, including: verifying measurement methodology, identifying KPIs, building metadata databases, and ensuring data integrity",
            "Managed growth and development of assistant planners"
            */
        ],
        logo: "https://media.licdn.com/dms/image/C4E0BAQFIcDAm5HsSOg/company-logo_200_200/0?e=2159024400&v=beta&t=SnLNxYfcJN-mM4sF62alSc0uTEmw_ZD1pKM4osMoKbw"
    },
    {
        company: "GroupM",
        time: "Jun 2016 – May 2017",
        position: "Assistant Media Planner",
        bullets: [
            /*
            "Coordinated weekly deliverables including: status reports, campaign overviews, competitive reports, flowcharts, and budget summaries",
            "Oversaw trafficking of campaign creative to ensure assets were shipped and received before deadlines",
            "Evaluated media partners to determine relevance to target audience profile"
            */
        ],
        logo: "https://www.exchangewire.com/wp-content/uploads/2019/06/groupm.png"
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
                    <div 
                        className="job"
                        key={`job-${i.company}-${i.position}`}
                    >
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
                                    <li
                                        key={`description-${j}`}
                                    >
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
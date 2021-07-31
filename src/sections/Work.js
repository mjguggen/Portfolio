import React from 'react'
import Job from '../components/Job'
import {jobs} from '../utils/info'

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
                    <Job
                        company={i.company}
                        logo={i.logo}
                        position={i.position}
                        time={i.time}
                        bullets={i.bullets}
                    />
                ))
            }
        </div>
    </section>
)

export default Work
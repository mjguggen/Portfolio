import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import {skills, projects} from '../utils/info'
import Project from '../components/Project'

const Projects = () => {
    const projectMap = () => projects.map((i, index) => {
        return (
            <Project
                project={i.project}
                subTitle={i.subTitle}
                description={i.description}
                stack={i.stack}
                platforms={i.platforms}
                image={i.image}
                links={i.links}
            />
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
                showThumbs={false}
            >
                {projectMap()}
            </Carousel>
        </section>
    )
}

export default Projects
import React from 'react'
import {skills} from '../utils/info'
import Skill from '../components/Skill'

const Skills = () => {
    const skillMap = (categoryType) => {
        return skills.filter(({category}) => category === categoryType).map((i, index) => {
            return (
                <Skill
                    title={i.title}
                    img={i.img}
                    pad={i?.pad}
                /> 
            )
        })
    }

    const catArr = [
        {catTitle: 'Languages', catName: 'language'},
        {catTitle: 'Technologies', catName: 'technology'},
        {catTitle: 'Cloud / Infra', catName: 'hosting'},
        {catTitle: 'Test Frameworks', catName: 'testing'},
        {catTitle: 'Tools', catName: 'tools'},
    ]

    return (
        <section className="skills" id="skills">
            <div className="sectionTitle">
                Skills
            </div>

            <div className="line divider-lg" />

            <div
                className="category_container"
            >
                {
                    catArr.map(i => (
                        <div 
                            key={`category-${i.catName}`}
                            className="category-wrap"
                            style={{
                                flexGrow: 1,
                                width: skillMap(i.catName).length > 0 ? '100%' : '0%',
                                opacity: skillMap(i.catName).length > 0 ? 1 : 0                            
                            }}
                        >
                            <div className="category_title">{i.catTitle}</div>
                            <div className="category_subWrapper">{skillMap(i.catName)}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}



export default Skills
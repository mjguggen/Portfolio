import React, {useState, Fragment} from 'react'

import {skills} from '../utils/skills'

const Skills = () => {
    const [categories, setCategories] = useState({
        frontEnd: true,
        backEnd: true,
        web: true,
        mobile: true
    })
    
    const filteredSkills = skills
        .filter((i) => {
            if (!categories.frontEnd) {
                return i.frontEnd === true
            }
            return i
        })
        .filter((i) => {
            if (!categories.backEnd) {
                return i.backEnd === true
            }
            return i
        })
        .filter((i) => {
            if (!categories.web) {
                return i.web === true
            }
            return i
        })
        .filter((i) => {
            if (!categories.mobile) {
                return i.mobile === true
            }
            return i
        })

    const skillMap = (categoryType) => {


        return filteredSkills.filter((i) => i.category === categoryType).map((i, index) => {
            return (
                <div className="category" key={`category-${index}-${i.title}`}>
                    <div className="category_icon">
                        <img
                            className="icon"
                            src={i.img}
                        />
                    </div>

                    <div className="category_name">{i.title}</div>
                </div>
            )
        })
    }

    const toggleCategory = (type) => {
        const bool = !categories[type]

        setCategories({
            ...categories,
            [type]: bool
        })
    }

    const btns = [
        {type: 'frontEnd', title: 'Front End'}, 
        {type: 'backEnd', title: 'Back End'}, 
        {type: 'web', title: 'Web'}, 
        {type: 'mobile', title: 'Mobile'}, 
    ]

    const catArr = [
        {catTitle: 'Languages', catName: 'language'},
        {catTitle: 'Frameworks', catName: 'framework'},
        {catTitle: 'Server/Database', catName: 'server'},
        {catTitle: 'Libraries', catName: 'library'},
        {catTitle: 'Tools', catName: 'tools'},
    ]

    const btnMap = () => {
        return btns.map((i, index) => {
            return (
                <div
                    key={`btnMap-${index}-${i.type}`}
                    className="categoryBtn btn"
                    onClick={() => toggleCategory(i.type)}
                >
                    <div 
                        className="categoryBtn_text"
                        style={{
                            zIndex: 5,
                            color: !categories[i.type] ? 'white' : null,
                        }}
                    
                    >{i.title}</div>

                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            background: '#ececec',
                            borderRadius: 20,
                            zIndex: -1,
                        }}
                    />
                    
                    <div
                        className="categoryBtn_bg"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: !categories[i.type] ? '100%' : 0,
                            
                            zIndex: -1,
                            top: 0,
                            left: 0,
                            margin: 'auto auto',
                        }}
                    />
                </div>
            )
        })
    }

    return (
        <section className="skills" id="skills">
            <div className="sectionTitle">
                Skills
            </div>

            <div className="line divider-lg" />

            <div className="btn-wrap">
                <div style={{
                    color: 'grey',
                    fontSize: '.8em'
                }}>Filter</div>
                <div className="line-vert"/>
                {btnMap()}
            </div>


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
                                opacity: skillMap(i.catName).length > 0 ? 1 : 0,
                                //display: skillMap(i.catName).length > 0 ? 'block' : 'none'
                            
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
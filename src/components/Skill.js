import React from 'react'

const Skill = (props) => (
    <div className="category" key={`category-${props.title}`}>
        <div className="category_icon">
            <img
                className="icon"
                src={props.img}
            />
        </div>
        <div className="category_name">{props.title}</div>
    </div>
)

export default Skill
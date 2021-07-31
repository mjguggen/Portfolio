import React from 'react'



const Job = (props) => (
    <div 
        className="job"
        key={`job-${props.company}-${props.position}`}
    >
        <div className="bullet">
            <div className="bullet-inner"/>
        </div>

        <div className="role">
            <div className="role-wrap">
                <div className="work-logo-wrap">
                    <img
                        src={props.logo}
                        alt={props.company}
                        className="work-logo"
                    />
                </div>


                <div className="position">
                    {props.position}
                </div>

                <div className="line-vert"/>

                <div className="company_wrap">
                    <div className="company">
                        
                        {props.company}
                    </div>

                    <div className="time">
                        {props.time}
                    </div>
                </div>

            </div>

            <ul className="description">
                {props.bullets.map(j => (
                    <li
                        key={`description-${j}`}
                    >
                        {j}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default Job
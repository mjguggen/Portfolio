import React, {useState} from 'react'

const Skill = (props) => {

    const [hover, setHover] = useState(false)

    return (
        <div 
            className="category" 
            key={`category-${props.title}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                position: 'relative'
            }}
        >
            <div className="category_icon">
                <img
                    className="icon"
                    src={props.img}
                    alt={props.title}
                    style={{
                        padding: props?.pad ? 5 : 0
                    }}
                />
            </div>

            <div
                style={{
                    opacity: hover ? 1 : 0,
                    position: 'absolute',
                    transition: 'opacity .5s',
                    pointerEvents: 'none',
                    minWidth: 'fit-content',
                    zIndex: 100,
                    top: '30%',
                    right: '110%',
                    background: '#5568C3',
                    color: 'white',
                    fontSize: 10,
                    borderRadius: 4,
                    padding: 5,
                    whiteSpace: 'nowrap',
                }}
            >
                {props.title}
            </div>
        </div>
    )
}

export default Skill
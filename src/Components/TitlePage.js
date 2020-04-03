import React from 'react';
import bg from '../Assets/bg.png'





const TitlePage = (props) => {

    

    return(
        <div className='page' id='title-page'>
            <div className="title-bg-wrapper">
                <img className='title-bg' src={bg}/>
            </div>

            <div className="title-elements">
                <h1 className="title-fade"> Hey, I'm Mike! </h1>
                <p className="title-fade2">Web Developer // Marketer // Musician </p>
            </div>
        </div>
    )
}



export default TitlePage
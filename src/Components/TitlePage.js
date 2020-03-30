import React from 'react';
import Mike from '../Assets/Mike_Guggenbuehl.jpg';
import bg from '../Assets/bg.jpg'





const TitlePage = (props) => {

    

    return(
        <div className='page' id='title-page'>
            <div className="title-bg-wrapper">
                <img className='title-bg' src={bg}/>
            </div>

            <div className="title-elements">
                <h1 style={props.styles}> Hey, I'm Mike! </h1>
                <p>Web Developer // Marketer // Musician </p>
            </div>
        </div>
    )
}



export default TitlePage
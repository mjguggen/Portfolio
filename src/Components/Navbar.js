import React from 'react';
import Mike from '../Assets/Mike_Guggenbuehl.jpg';


const Navbar = () => (
    <div className="navbar" id="navbar">
        <a className="image-header" href="https://www.linkedin.com/in/mike-guggenbuehl/" target="_blank">
            <img src={Mike} className='mike-image' /> 
            <div className="name">
                <div >Mike Guggenbuehl</div>
                <div>Minneapolis, MN</div>
            </div>
        </a>


        <div>
            <a className="contact-label" id="contact-label" href="#contact">Contact </a>
        </div>
    </div>
)


export default Navbar;
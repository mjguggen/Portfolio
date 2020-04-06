import React from 'react';
import Resume from '../Assets/Resume.pdf'


const Footer = props => (
    <div id="footer">
        <div className="container">
            <div className="footer-links">
                <a className="footer-link" href={Resume}> <img className="footer-img" src="https://cdn1.iconfinder.com/data/icons/business-703/80/resume__CV__job__recruitment__file-512.png" download/> </a>
                <a href="https://github.com/mjguggen" target="_blank" className="footer-link"> <img className="footer-img" src="https://image.flaticon.com/icons/svg/25/25231.svg"/> </a>
                <a href="https://www.linkedin.com/in/mike-guggenbuehl/" target="_blank" className="footer-link"> <img className="footer-img" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-512.png"/> </a>
                <a className="footer-link" href="mailto:mjguggen@gmail.com?Subject=Hey%20Mike!"> <img className="footer-img" src="https://cdn.iconscout.com/icon/free/png-256/gmail-32-761667.png"/> </a>

            </div>

            <div className="copyright"> © Mike Guggenbuehl 2020</div>
        </div>
    </div>
)

export default Footer



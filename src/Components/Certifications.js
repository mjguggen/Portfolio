import React from 'react';
import fccLogoLarge from '../Assets/fcc_secondary_large.png';
import checkbox from '../Assets/checkbox.png';




const googleLogo = "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"

const googleMeasurement="https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/certifications/badges/8297/original/unnamed.png?1582571222"

const googleVideo="https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/certifications/badges/8694/original/unnamed.png?1568335938"

const googleDisplay="https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/certifications/badges/9112/original/unnamed.png?1582570720"

const googleSearch="https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/certifications/badges/8914/original/unnamed.png?1568337331"


const Certifications = props => (
    <div className="page" id="certifications">
        <div className="container">
            <h1>CERTIFICATIONS</h1>
            <div className="logo-container">
                <img src={fccLogoLarge} className="logo"/>
            </div>

            <div className="fcc-certification-container">

                <div>
                    <a className='certification-button fade-in' href="https://www.freecodecamp.org/certification/mjguggen/responsive-web-design" target ="_blank">Responsive Web Design Certification</a>

                    <div className="certifications fade-in">
                        <div className="certification-section">
                            <div className="down-arrow"/>
                            <div className="certification-header">Course inclusive of:</div>
                        </div>
                        <div className='course-contents'>
                            <div className="content"> <img src={checkbox} className="check"/> HTML5</div>
                            <div className="content"> <img src={checkbox} className="check"/> CSS</div>
                            <div className="content"> <img src={checkbox} className="check"/> Applied Visual Design</div>
                            <div className="content"> <img src={checkbox} className="check"/> Applied Accesibility</div>
                            <div className="content"> <img src={checkbox} className="check"/> Responsive Web Design Principles</div>
                            <div className="content"> <img src={checkbox} className="check"/> CSS Flexbox</div>
                            <div className="content"> <img src={checkbox} className="check"/> CSS CSS Grid</div>
                        </div>
                    </div>
                </div>

                <div>
                    <a className='certification-button fade-in' href="https://www.freecodecamp.org/certification/mjguggen/front-end-libraries"  target ="_blank">Front End Libraries Certification</a>

                    <div className="certifications fade-in">
                        <div className="certification-section">
                            <div className="down-arrow"/>
                            <div className="certification-header">Course inclusive of:</div>
                        </div>
                        <div className='course-contents'>
                                
                            <div className="content"> <img src={checkbox} className="check"/> Bootstrap</div>
                            <div className="content"> <img src={checkbox} className="check"/> jQuery</div>
                            <div className="content"> <img src={checkbox} className="check"/> Sass</div>
                            <div className="content"> <img src={checkbox} className="check"/> React</div>
                            <div className="content"> <img src={checkbox} className="check"/> Redux</div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="logo-container fade-in"><img src={googleLogo} className="logo"/></div>
            <div className="google-certification-container">


                <div className="google-certification fade-in">
                    <img src={googleMeasurement} className="google-certification-logo"/>
                    <div className="google-certification-description">
                        <div className="g-cert-descript">Google Ads - Measurement Certification</div>
                        <div className="g-cert-id">Completion ID: 43499947</div>
                    </div>
                </div>

                <div className="google-certification fade-in">
                    <img src={googleVideo} className="google-certification-logo"/>
                    <div className="google-certification-description">
                        <div className="g-cert-descript">Google Ads - Video Certification</div>
                        <div className="g-cert-id">Completion ID: 43430189</div>
                    </div>
                </div>

                <div className="google-certification fade-in">
                    <img src={googleDisplay} className="google-certification-logo"/>
                    <div className="google-certification-description">
                        <div className="g-cert-descript">Google Ads - Display Certification</div>
                        <div className="g-cert-id">Completion ID: 43428833</div>
                    </div>
                </div>


                <div className="google-certification fade-in">
                    <img src={googleSearch} className="google-certification-logo"/>
                    <div className="google-certification-description">
                        <div className="g-cert-descript">Google Ads - Search Certification</div>
                        <div className="g-cert-id">Completion ID: 43426987</div>
                    </div>
                </div>


            </div>

        </div>
    </div>
)



export default Certifications
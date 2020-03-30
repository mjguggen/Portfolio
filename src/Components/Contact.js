import React from 'react';


const Contact = () => (
    <div className="page" id="contact" name="contact">
        <div className="container">
            <h1>Contact Me</h1>
            <div className="contact-content-wrapper">

                <div className="contact-content">
                    <div className="contact-email">Email: </div>
                    <div className="contact-info">
                        <a href="mailto:mjguggen@gmail.com?Subject=Hey%20Mike!" className="contact-number">mjguggen@gmail.com</a>
                    </div>
                </div>

                <div className="contact-content">
                    <div className="contact-email">Phone: </div>
                    <div className="contact-info">
                        <a href="tel:6083976911" className="contact-number">(608) 397-6911</a>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
)


export default Contact;
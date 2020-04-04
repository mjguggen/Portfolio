import React from 'react';
import Footer from '../Components/Footer'


const Contact = () => {


    return(
        <div className="page skew-container-footer" id="contact" name="contact" >
            <div class="skewed-footer"></div>

                
            <div className="container">
                <h1>CONTACT</h1>
                <form className="contact-form" action="https://formspree.io/mvobgwkn" method="POST">
                    <input type="text" placeholder="Name*" name="Name" className="contact-el" required/>
                    <br/>
                    <input type="email" placeholder="Email*" name="Email" className="contact-el" required/>
                    <br/>
                    <input type="text" placeholder="Subject*" name="Subject" className="contact-el" required/>
                    <br/>
                    <textarea className="contact-el" placeholder="Type your message here." name="message" />
                    <br/>

                    <input type="submit" className="contact-button" value="LET'S CHAT"/>

                </form>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact;
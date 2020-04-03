import React from 'react';
import bg from '../Assets/bg_contact.png'
import Footer from '../Components/Footer'


const background = {
    backgroundImage: bg
    
}

const Contact = () => {




    return(
        <div class="page" id="contact" name="contact" >

                {/*
                <div className="contact-bg-wrapper">
                    <img className='contact-bg' src={bg}/>
                </div>
                */}
                
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


/*
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
*/

export default Contact;
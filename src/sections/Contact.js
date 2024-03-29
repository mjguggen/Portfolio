import React from 'react'

const Contact = (props) => {
    return (
        <div id="contact">

            <div 
                style={{
                    width: '100%',
                    maxWidth: 500,
                    margin: '0px auto',
                    padding: '0px 20px 100px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 100,
                }}
            >
                <div className="sectionTitle">
                    Contact
                </div>

                <div className="line divider-lg" />
                <form 
                    className="contact-form" 
                    action="https://formspree.io/mvobgwkn" 
                    method="POST"
                    id="contact-form"
                >
                    <input type="text" placeholder="Name*" name="Name" className="contact-el" required/>
                    <br/>

                    <input 
                        type="email" 
                        placeholder="Email*" 
                        name="Email" 
                        className="contact-el" 
                        required
                    />
                    <br/>

                    <input 
                        type="text" 
                        placeholder="Subject*" 
                        name="Subject" 
                        className="contact-el" 
                        required
                    />

                    <br/>

                    <textarea 
                        className="contact-el" 
                        placeholder="Type your message here." 
                        name="message" 
                    />

                    <br/>

                    <div 
                        type="submit" 
                        className="contact-button btn"
                        onClick={(e) => {
                            e.preventDefault()

                            document.getElementById('contact-form').submit()
                        }}
                    >
                        SEND
                    </div>
                </form>
            </div>

            <div className="footer">
                <div className="footer_text">© Mike Guggenbuehl 2021</div>
            </div>
        </div>
    )

}

export default Contact
import React from 'react';


const OtherSkills = props => {



    return(
        <div class="page" id="other-skills">
            <div className="container">
                <h1>Other Skills</h1>

                <div classname="skills-container">


                    <div onMouseEnter={props.skillHover} onMouseLeave={props.skillHoverOut} className="skill-box" >
                        <div className="skill-title">Music Production</div>

                        <div className="skills-experience"><div>Experience</div></div>

                        <div className="skills-bar"/>

                        <div className="skills">
                            <ul>
                                <div>
                                    <li>Audio Production</li>
                                    <li>Sound Design</li>
                                    <li>Mixing and Mastering</li>
                                    <li>Recording and AV</li>
                                </div> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    
}

/*
    <div className="fade-in-up">
        <div className="skills-logo-container">
            <a href="https://open.spotify.com/artist/0arCcK0KVLd5L1Q5zr9WWM?si=k3ddQaqnQ42rhZxEh4KKGg" target="_blank"><img className="skills-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" /> </a>
            <a href="https://music.apple.com/us/artist/guggenz/815756991" target="_blank"> <img className="skills-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1280px-Apple_Music_logo.svg.png"/> </a>
            <a href="https://soundcloud.com/guggenz" target="_blank"> <img className="skills-logo" id="sc-logo" src="https://www.stickpng.com/assets/images/58af045f6c252499281ae921.png"/> </a>
            <a href="https://guggenz.bandcamp.com/" target="_blank"> <img className="skills-logo" src="https://img.pngio.com/bandcamp-logo-vector-png-transparent-bandcamp-logo-vectorpng-bandcamp-logo-transparent-5054_1573.png"/> </a>
        </div>
    </div>
*/

/*

                                <div className="fade-in-up">
                                    <div> 20M+ streams across all platforms </div>
                                    <button>  <img className="skills-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" />  </button>
                                    <button>  <img className="skills-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1280px-Apple_Music_logo.svg.png" />  </button>
                                    <button>  <img className="skills-logo" id="sc-logo" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c537.png" />  </button>
                                    <button>  <img className="skills-logo" src="https://img.pngio.com/bandcamp-logo-vector-png-transparent-bandcamp-logo-vectorpng-bandcamp-logo-transparent-5054_1573.png" />  </button>
                                </div>
*/

export default OtherSkills
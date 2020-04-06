import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

const icons = {
    //tech
    tech: {
    Javasript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    CSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    React: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    HTML: "https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png",
    Bootstrap: "https://themes.getbootstrap.com/wp-content/uploads/2018/02/Bootstrap-logo.png",
    Git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    GitHub: "https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png",
    'Chart.js': "https://www.chartjs.org/img/chartjs-logo.svg",
    Redux: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    npm: "https://authy.com/wp-content/uploads/npm-logo.png",
    CSSinJS: "https://avatars3.githubusercontent.com/u/9503099?s=200&v=4",
    Sass: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/057/full/scsslogo.png",
    },

    //Audio/Design/Video
    audioDesign: {
    "FL Studio": "https://upload.wikimedia.org/wikipedia/en/2/2c/FL_Studio_Mobile_icon.png",
    "iZotope Mastering Suite": "https://media-exp1.licdn.com/dms/image/C4E0BAQEYGcVRgDwZuw/company-logo_200_200/0?e=2159024400&v=beta&t=kTrapcjQVGqEG2jgQHFZ6p2LfpVd0JN4ZcVXBjJAJBg",
    "Massive": "https://www.native-instruments.com/forum/attachments/massive-logo-png.41689/",
    Traktor: "https://i.pinimg.com/originals/1e/25/e6/1e25e6caf53005b69ecb525cb55ba301.png",
    Photoshop: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    InDesign: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
    Premiere: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Premiere_Pro_Logo.svg/1200px-Adobe_Premiere_Pro_Logo.svg.png",
    "After Effects": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png"
    },

    //Advertising
    advertising: {
    "Facebook Ads Manager": "https://lh3.googleusercontent.com/ODKlFYm7BaNiLMEEDO2b4DOCU-hmS1-Fg3_x_lLUaJZ0ssFsxciSoX1dYERaWDJuEs8",
    "Google Adwords": "https://www.kindpng.com/picc/m/219-2196962_google-ads-logo-png-transparent-png.png",
    Mailchimp: "https://www.stickpng.com/assets/images/58417f6ba6515b1e0ad75a2b.png",
    "Email Octopus": "https://pbs.twimg.com/profile_images/965925921499893760/2t4AB6Kz_400x400.jpg",
    comScore: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX///9UyOj/pADkPTD/oABAxOb/2rH/pgBKze7iNTLnNyb5kBS5eoT/ngD/ogD/x4be8vriMzLmOSrlPC7pNCHqMRtfy+nT7/j/qgBGz/DrLxfs+PzL7Pem4PL/mwD/+vP/v27/6Mz/8t//1KL/3raK1+5x0Ov2iBfwciDzex3tYyX7lgzqWijnTCvyeB6jjp635fSY2/D/rC3/tU3/zI7/s0L/vWD/5sr/79n/xn3/9+n/2Kf/wGv/qiT/4b72/P7qRyHuaSPrXSbfQTbWU1DGZGaohpSalql5sMqKo7livdraTEbLXl6+c3uxgY3PWFWEqL90tM7n0LjuRpWcAAAD70lEQVR4nO3d61bTQBRAYWhDb9CUUgoYsQoFvIFCW5AqiIrITQR9/4dxprkSC4SuJJOpez9BvnUyJ/3DMDFBRERERERERERERERERERERER3t7+2v6r6GZKt0KpWW2ane9Brf175+Fz14yRQwciJTNM0jKrIPNx90W+vrayOj9UW+nnWanF3r9YufNjX3RoWDrEauc5ev1f4vP9R9cOO1N3CkFViW0Zn70Xvk17WKMJbWNtazXW60qrBcnqk8N+5VqtL3YNahpfTqMIw1lnEYjmtfciWNQbhEKuR2z3oy0WcgQMbq3CIVX50+r1P4qOjarAJCUNWYzDXw25fwSJOXDjE2jIO7V+JqRzYFIW3sIb/KzHhRaxGGLR6B7a7J5bTSuy/ElUL/fxFfNhpj6XQzzRqYy7MIUSIUH0IESJUH0KECNWHECFC9SFEiFB9CBEiVB/CiaOni8vbO+sbC1PjJTyatV2TU7JJ2VgIXdfClA/z0k9YlC0Va9K1HZrXsHQR2q6lotmafvn61dfNLzOle126CJ15Fc230vVmcytfrtfLonxlphRBl1WhM6+cIVzvvn7b3HJY5byfhsKi+x5W38rX8NtWQ8wrxNJRGD5eW/l6/R6XNkLHteQdr0Y5mivjQmdtuMdLsMr/HC8Nhe7xysnjNXDlHzuuTArdLZ/zjlf5vrWhj9BZG4b39Yq4NrQRGuI1fONt+SRcioXF6XrSLuXCtHgIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESL8f4SNxlxl3roaP6F0zTctq3n8/WTmx+lZRGDWhXJelflm02pWLk+ufpyen11Mlp48KZWiTjCrwoFLDKyZv/x59WvgGrAeAcuisOG6LOtYuN5L1+SoriwJG3POAZs7vr6aeX9683v0eWVJ6Lms4+uTgesihnmpFzqLw7Iq+cFCFK6S7Yodlq7QXYiW7TqX87LfxMRcaQi9xTE/5y3EUsLzSkXoLcTGpbsQY10cqoTy3k1zWnzAmmIhCtdNLItevfDWfxOotf/4i0M1K9AIwuCdsLcuIp+N8iedqRdZGJrXsHt99RW2nDt8ew/cV6ytcLUQ8R5mbYWRQ6gmhAgRqg8hQoTqQ4gQofoQIkSoPoQIEaoPIcL/TDj8ilTFxSmUHT2dXd5+tr6x8MC9qekVtzBoXcyENTlhIKVzTUXopeIdTlcYyLUmvpuUCb3sue4kNlf1wkD2XNfjnWumhH4xzjWjQi/xDi8K6/ro1qwLA9lzfbRVI6GXO9eH7pvXVxgowlw1F/rdOdexEfqFrGMo9BPW5Wc7qp+CiIiIiIiIiIiIiIjorv4CCnAvfCPd4pUAAAAASUVORK5CYII=",
    Kantar: "https://logodix.com/logo/1951124.png",
    Simmons: "https://media-exp1.licdn.com/dms/image/C4E0BAQFOWyeEhi6b4w/company-logo_200_200/0?e=2159024400&v=beta&t=bIssOOlEPV3t9TQK4GwqsDRmcmddit1SLHlWzZT5nk4",
    Nielsen: "https://nielsenbook.co.uk/wp-content/uploads/sites/4/2018/09/n-tabsquare.png"},
}


const Skills = props => {

    const links = (input) => { 
        return Object.values(icons[input])
    }

    const keys = (input) => {
        return Object.keys(icons[input])
    }

    
    const getMap = (input) => {
        return links(input).map((i, index) => (
            <div className="skill-icon-container" key={index}> 
                <img className="skill-icon"  src={i}/>
        <div className="skill-description"> {keys(input)[index]} </div>
            </div>
        ))
    }

    return (
        <div className="page " id="skills">
            <div className="container">
                <h1>SKILLS</h1>

                <div className="skill-wrap" >
                    <div className="skill-container fade-in">
                        <div className="skill-title">TECH</div>
                        <div className="skill-icon-wrap">
                            {getMap("tech")}
                        </div>
                    </div>
                    <div className="bar"/>
                    <div className="skill-container fade-in">
                        <div className="skill-title">AUDIO/VIDEO/DESIGN</div>
                        <div className="skill-icon-wrap">
                            {getMap("audioDesign")}
                        </div>
                    </div>
                    <div className="bar"/>
                    <div className="skill-container fade-in">
                        <div className="skill-title">ADVERTISING</div>
                        <div className="skill-icon-wrap">
                            {getMap("advertising")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Skills
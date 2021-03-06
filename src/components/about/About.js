import React from 'react'
import './_about.scss'
import weaveMobile from '../../assets/weave.png'
import weaveDesktop from '../../assets/weave-desktop.png'


function About(){
    return(
        <section className="about container__pd-lr appearUpwards">
            <div  className="about__card">
                <img className="about__weave-mobile" src={weaveMobile} alt="weave" />
                <img className="about__weave-desktop" src={weaveDesktop} alt="weave" />
                <div className="about__text padding-all">
                    <h2 id="about" className="subheader">About Me</h2>
                    <p>This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</p>
                    <p>This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</p>
                </div>
                <img className="about__weave-mobile" src={weaveMobile} alt="weave" />
            </div>
        </section>
    )
}

export default About
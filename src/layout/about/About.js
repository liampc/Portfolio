import React, {Component} from 'react'
import './_about.scss'

import Subheader from '../../components/Subheader'
import Logo from '../../components/Logo'

import html from '../../assets/images/html.png'
import css from '../../assets/images/Css_icon.png'
import js from '../../assets/images/js_logo.png'
import reactLogo from '../../assets/images/react_icon.png'


class About extends Component {



    render(){
        return (
            <section className="about container-pt">
                 <Subheader title={'About Me'}/>
                <div className="about__container container container-pall">
                    <div>
                        <p>This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</p>
                        <p>This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</p>
                    </div>
                    <div className="about__logos">
                        <Logo link={html} alt={'html-logo'} pos={1}/>
                        <Logo link={css} alt={'css-logo'} pos={2}/>
                        <Logo link={js} alt={'js-logo'} pos={3}/>
                        <Logo link={reactLogo} alt={'react-logo'} pos={4}/>
                    </div>
                </div>
            </section>
        )
    }
}


export default About
import React, {Component} from 'react'
import './_about.scss'

import Subheader from '../../components/Subheader'

class About extends Component {



    render(){
        return (
            <section className="about">
                <div className="about__container container">
                <Subheader title={'About Me'} />
                </div>
            </section>
        )
    }
}


export default About
import React, {Component} from 'react'
import './_about.scss'

import Subheader from '../../components/Subheader'

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
                    <div>
                        <span>CSS</span>
                    </div>
                </div>
            </section>
        )
    }
}


export default About
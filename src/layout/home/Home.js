import React, {Component} from 'react'
import './_home.scss'

class Home extends Component {


    render(){
        return (
            <section className="home">
                <div className="home__container container container-pall">
                    <div className="home__title">
                        <h1>Kathlia Carlos</h1>
                        <p>Front-end developer</p>
                    </div>
                    <div className="home__image"></div>
                </div>
            </section>
        )
    }
}

export default Home
import React from 'react'
import './_icons.scss'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'

function Icons(){

    return(
        <section className="icons container__pd-all">
            <img className="icons__image" src={html} alt="html" />
            <img className="icons__image" src={css} alt="css" />
            <img className="icons__image" src={js} alt="js" />
            <img className="icons__image" src={react} alt="react" />
        </section>
    )
}

export default Icons
import React from 'react'
import './_icons.scss'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'

function Icons(){

    return(
        <section className="icons container__pd-all">
            <div className="icons__image">
                <div className="front icons__card" style={{backgroundImage: `url(${html})`}}></div>
                <div className="back icons__card">HTML</div>
            </div>

            <div className="icons__image">
                <div className="front icons__card" style={{backgroundImage: `url(${css})`}}></div>
                <div className="back icons__card">CSS</div>
            </div>

            <div className="icons__image">
            <div className="front icons__card" style={{backgroundImage: `url(${js})`}}></div>
                <div className="back icons__card">JavaScript</div>
            </div>

            <div className="icons__image">
                <div className="front icons__card" style={{backgroundImage: `url(${react})`}}></div>
                <div className="back icons__card">React</div>
            </div>

        </section>
    )
}

export default Icons
import React from 'react'

import './_header.scss';
import image from '../../assets/Profile.jpg';

function Header(){

    return (
    
        <header className="header">
            <div>
                <nav className="header__nav container__pd-l">
                    <a href="#about">About Me</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="header__titles">
                    <h1 className="container__pd-l">Kathlia Carlos</h1>
                    <p className="container__pd-l">Frontend Developer</p>
                </div>
            </div>
            <img className="header__profile" src={image} alt="profilePic" />
        </header>
    )
   
}

export default Header
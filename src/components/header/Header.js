import React from 'react'

import './_header.scss';
import image from '../../assets/Profile.jpg';

function Header(){

    return (
    
        <header className="header">
            <div>
                <nav className="header__nav padding-lr">
                    <a href="#">About Me</a>
                    <a href="#">Works</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="header__titles">
                    <h1 className="padding-lr">Kathlia Carlos</h1>
                    <p className="padding-lr">Frontend Developer</p>
                </div>
            </div>
            <img className="header__profile" src={image} alt="profilePic" />
        </header>
    )
   
}

export default Header
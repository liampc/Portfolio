import React from 'react'

import './_header.scss';

function Header(){

    return (
    
        <header className="header">
            <nav className="header__nav padding-lr">
                <a href="#">About Me</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
            </nav>
            <div className="header__titles">
                <h1 className="padding-lr">Kathlia Carlos</h1>
                <p className="padding-lr">Frontend Developer</p>
            </div>
        </header>
    )
   
}

export default Header
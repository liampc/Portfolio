import React from 'react'

import './_header.scss';

function Header(){

    return (
    
        <header className="header">
            <nav className="header__nav container">
                <a href="#">About Me</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
            </nav>

        </header>
    )
   
}

export default Header
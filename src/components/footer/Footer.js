import React from 'react';
import './_footer.scss'

function Footer(){
    return(
        <footer className="footer">
            <div className="container__pd-all">
                <h2>Contact</h2>
                <div className="footer__quote">
                    <p>"Chance encounters are what keep us going"</p>
                    <p>Haruki Murakami</p>
                </div>
                <div className="footer__icons">
                    <img src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/gmail--v2.png"/>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                </div>
            </div>
          
        </footer>
    )
}

export default Footer
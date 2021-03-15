import React from 'react';
import './_footer.scss'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container container__pd-all">
                <h2 id="contact" className="subheader">Contact</h2>
                <div className="footer__quote">
                    <p>"Chance encounters are what keep us going"</p>
                    <p>-Kafka on the Shore, Haruki Murakami</p>
                </div>
                <div className="footer__icons ">
                    <a href="#">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
                        <p>liampc@github.com</p>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/fluent/48/000000/gmail--v2.png"/>
                        <p>kathliampcarlos@gmail.com</p>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                        <p>www.linkedin.com/in/kathliampcarlos</p>
                    </a>
                    
                </div>
            </div>
          
        </footer>
    )
}

export default Footer
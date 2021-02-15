// import { FALSE } from 'node-sass';
import react, {Component} from 'react'


import './_header.scss';



class Header extends Component {

    constructor(props){
        super(props)
            this.state = {
                isToggleOn : false
            }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){
        let toToggle = document.querySelectorAll('.toToggle')
        
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
        
        toToggle.forEach(el => {
            if ( this.state.isToggleOn == false){
                el.classList.add('open')
            } else {
                el.classList.remove('open')
            }

        })
       

    }


    render(){

        return (
            <header className="header toToggle">
                <nav className="header__nav container container-pall">
                    <a className="header__toggle" href="#" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <div className="header__links">
                        <a href="#">Kathlia Carlos</a>
                        <a href="#">About Me</a>
                        <a href="#">Works</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>
                <div className="header__overlay container container-pall toToggle">
                    <a href="#">Kathlia Carlos</a>
                    <a href="#">About Me</a>
                    <a href="#">Works</a>
                    <a href="#">Contact</a>
                </div>
            </header>
        )
    }
}

export default Header
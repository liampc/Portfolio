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
        let header = document.querySelector('.header')
        
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
        
        this.state.isToggleOn == false ? header.classList.add('open') : 
        header.classList.remove('open')

    }


    render(){


        return (
            <header className="header">
                <nav className="header__nav container">
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
            </header>
        )
    }
}

export default Header
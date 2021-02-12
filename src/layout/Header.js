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
            <header className="header container ">
                <a className="header__toggle" onClick={this.handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </header>
        )
    }
}

export default Header
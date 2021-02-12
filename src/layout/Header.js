import react, {Component} from 'react'


import './_header.scss';



class Header extends Component {

    render(){

        return (
            <header className="header container open">
                <a className="header__toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </header>
        )
    }
}

export default Header
import React, {Component} from 'react'

import './_components.scss'



class Logo extends Component {

    render(){
        return(
            <div className="logo">
                <img src={this.props.link} alt={this.props.alt} />
            </div>
        )
    }
}


export default Logo
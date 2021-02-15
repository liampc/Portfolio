import React, {Component} from 'react'

import './_components.scss'



class Logo extends Component {

    render(){

        let style
        let darkBlue = "#383E56"

        if(this.props.pos == 1 || this.props.pos == 4){
            style = {backgroundColor: darkBlue}
        }

        return(
            <div className="logo" style={style}>
                <img 
                    src={this.props.link} 
                    alt={this.props.alt} 
                />
            </div>
        )
    }
}


export default Logo
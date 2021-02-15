import React, {Component} from 'react'
import './_components.scss';

class Subheader extends Component {

    render(){

        return (
            <div className="subheader">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Subheader 
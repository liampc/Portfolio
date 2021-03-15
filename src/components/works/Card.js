import React from 'react'


function Card(props){

    return (
        <div className="works__card ">
            <div className="works__image" style={{backgroundImage: `url(${props.image})`}}>
                <div className="works__overlay">
                </div>
            </div>
            <div className="works__text">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <hr></hr>
            </div>
        </div>

    )
}

export default Card;
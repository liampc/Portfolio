import React from 'react'
import './_works.scss'
import Card from './Card'

import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'


function Works(){

    const works = [
        {
            name: 'Work1',
            image: work1,
            description: 'This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.'
        },
        {
            name: 'Work2',
            image: work2,
            description: 'This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.'
        }
    ]


    let display = works.map(card => {
       return <Card 
            name={card.name}
            image={card.image}
            description={card.description}
        />
    })

    return(
        <section className="works container__pd-all">
            <h2 id="works" className="subheader">Works</h2>
            <div className="works__container container__pd-t">
                {display}
            </div>

        </section>
    )
}



export default Works
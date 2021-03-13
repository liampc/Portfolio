import React from 'react'
import './_works.scss'


import work1 from '../../assets/work2.png'



function Works(){
    return(
        <section className="works container__pd-all">
            <h2 className="works__title">Works</h2>
            <div className="works__card ">
                <div className="works__image" style={{backgroundImage: `url(${work1})`}}>
                    <div className="works__overlay">
                        <h4>Work1</h4>
                    </div>
                </div>
                <div className="works__text">
                    <h3>Work1</h3>
                    <p>This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</p>
                    <hr></hr>
                </div>
                
            </div>
        </section>
    )
}



export default Works
import React from "react";
import pool from '../images/pool2.webp'

const About = () =>{

    return(
        <section>
        <div class="about-section"> 
            <div class="container">
            <h2 class="about-header">
                Welcome to your luxurious home away from home 
            </h2>
            <section>
                <p>Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!</p>
            </section>
            <img src={pool} alt ={"pool"}/>
            </div>

        </div>
        </section>
        

    );

}

export default About
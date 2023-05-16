import React from "react";
import hotel1 from '../images/Hotel1.jpg'
import hotel2 from '../images/hotel2.jpg'
import hotel3 from '../images/Hotel3.jpg'

const Accommodations = () =>{

    return(
        <section>
        <div class="accommodations-section"> 
            <div class="container">
            <h2 class="accommodations-header">
            Accommodations
            </h2>
            </div>

            <div class="package-container">

            <section class="Hotel1-col">
                <img class="Hotel-img" src={hotel1}></img>
                <div class="Hotel-card">
                <p>2 adults | 1 child below 7</p>
                <p>De Luxe Room</p>
                <p>from $189 a night</p>
                </div>
            </section>
            
            <section class="Hotel2-col">
            <img class="Hotel-img" src={hotel2}></img>
                <div class="Hotel-card">
                <p>2 adults | 1 child below 7</p>
                <p>De Luxe Sea View</p>
                <p>from $209 a night</p>
                </div>
            </section>

            <section class="Hotel3-col">
            <img class="Hotel-img" src={hotel3}></img>
                <div class="Hotel-card">
                <p>2 adults | 1 child below 7</p>
                <p>The Wellhall Family Suite</p>
                <p>from $399 a night</p>
                </div>
            </section>
            </div>


        </div>
        </section>

    );

}

export default Accommodations
import React from "react";
import earlybird from "../images/Front-desk.jpg"
import WellHall from "../images/logo.jpg"
import Nightsfree from "../images/Towel.jpg"
const Promos = () =>{

    return(
        <section className="main-container">
            
                <div className="accommodations-header">
                    <h1>Promos and Offers</h1>
                </div>
                <div className="promo-container">
                    
                <section class="Hotel1-col">
                <img class="Hotel-img" src={earlybird}></img>
                <div class="promo-card">
                <h3>Early Bird Discount</h3>
                <p>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                
                </div>
            </section>

            <section class="Hotel1-col">
                <img class="Hotel-img" src={WellHall}></img>
                <div class="promo-card">
                <h3>Wellhall Members Club</h3>
                <p>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                
                </div>
            </section>
             
            <section class="Hotel1-col">
                <img class="Hotel-img" src={Nightsfree}></img>
                <div class="promo-card">
                <h3>Book 3 Nights, Get 1 Night Free</h3>
                <p>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>   
                </div>
            </section>
            </div>
        </section>

    );

}

export default Promos
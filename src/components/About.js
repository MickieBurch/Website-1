import React from "react";
import pool from '../images/pool2.webp'

const About = () =>{

    return(
<section>
  <div class="about-section"> 
    <div class="about-container">
      <div class="left-column">
        <img class="about-image" src={pool} alt="Pool Image"></img>
        <div class="text-content">
          <h2 class="about-header">
            Welcome to your luxurious home away from home 
          </h2>
          <p class="about-p"> 
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        

    );

}

export default About
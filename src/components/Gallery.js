import React from "react";
import Pooltest from "../images/pool2.webp"

const Gallery = () =>{

    return(
        <section className="main-container">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1>
                    The Family Suite
                    </h1>
                    <p className="gallery-p">Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</p>
                    </div>    
                    <div className="gallery-img-header">
                    <img src={Pooltest}></img>
                    <caption className="caption">Hotel pool </caption>
                    </div>
                    
               </div>
               <div className="img-container">
                    <div>
                    <p>IMG HERE</p>
                    <caption>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</caption>
                    </div>
                <div>
                <p>IMG HERE</p>
                    <caption>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</caption>
                </div>
                <div>
                    <p>IMG HERE</p>
                    <caption>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</caption>
                </div>
            </div>
        </section>

    );

}

export default Gallery
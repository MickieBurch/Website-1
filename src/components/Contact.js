import React from "react";

const Contact = () =>{

    return(
        <section className="contact-container">
            <div>
                <div className="contact-header">
                    <h1>The Wellhall</h1>
                </div>
              
              <div className="contact-body">
                <column className="contact-card">
                <h3>Reservations Office</h3>
                <p>123 Anywhere St., Any City ST 12345</p>
                <p>1123-456-7890</p>
                <p>hello@reallygreatsite.com</p>
                </column>

                <column className="contact-card">
                <h3>Office Hours</h3>
                <p>Monday to Friday
                    9:00 am to 6:00 pm
                    Saturday
                    9:00 am to 12:00 noon</p>
                </column>

                <column className="contact-card">
                <h3>Get Social</h3>
                <button><icon>F</icon></button>
                <button><icon>Twitter</icon></button>
                <button><icon>Instagram</icon></button>
                <button>Tag us in your photos!</button>
                </column>

                </div>
            </div>
        </section>
    );

}

export default Contact
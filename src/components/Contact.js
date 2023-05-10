import React from "react";

const Contact = () =>{

    return(
        <section>
            <div>
                <div>
                    <h1>The Wellhall</h1>
                </div>
                <column>
                <h3>Reservations Office</h3>
                <p>123 Anywhere St., Any City ST 12345</p>
                <p>1123-456-7890</p>
                <p>hello@reallygreatsite.com</p>
                </column>

                <column>
                <h3>Office Hours</h3>
                <p>Monday to Friday
                    9:00 am to 6:00 pm
                    Saturday
                    9:00 am to 12:00 noon</p>
                </column>

                <column>
                <h3>Get Social</h3>
                <button><icon>F</icon></button>
                <button><icon>Twitter</icon></button>
                <button><icon>Instagram</icon></button>
                <button>Tag us in your photos!</button>
                </column>
            </div>
        </section>
    );

}

export default Contact
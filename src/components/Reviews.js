import React from "react";
const Reviews = () =>{

    return(
        <section className="reviews-container">
            
            <div>
                <div className="reviews-header">
                    <h1>
                    In the Press
                    </h1>
                </div>

                <div className="review-body">
                    <section className="review-card">
                        <p>
                        Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                        -
                        Santa Solana Post
                        </p>
                    </section>

                    <card className="review-card">
                        <p>
                        Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                        -
                        Mariana's Luxe Travels
                        </p>
                    </card>

                    <card className="review-card">
                    Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    -
                    Fairhill Journal
                    </card>
                </div>
            </div>

        </section>

    );

}

export default Reviews
import React from "react";
import FlyNow from "./FlyNow";
const ChooseYourWorld = () => {
    return (
        <div className="container">
        <div className="choose-your-world">
        <div className="choose-your-world-header">
             <h1>Choose Your World</h1>
            <p>Get inspired by these dream distination from around the globe</p>
            </div>
           
            <div className="row">
                <div className="col-lg-6 order-lg-1 order-2">
                    <div className="choose-your-world-flyNow row ">
                        <div className="col-lg-6">
                        <div className="fly-now-up"><FlyNow /></div> 
                        <div className="fly-now-down"><FlyNow /></div> 
                        </div>
                        <div className="col-lg-6">
                        <div className="fly-now-up"><FlyNow /></div> 
                        <div className="fly-now-down"><FlyNow /></div> 
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 order-lg-2 order-1 ">
                    <div className="choose-your-world-details">
                            <div className="details-img">
                                <img src="imagesAndIcons/NoPath.png" className="card-img-top" alt="..." />

                            </div>
                            <div className="details-overlay">
                                <img src="imagesAndIcons/placeholder.png" alt="placholder" />
                                <h2>Fabulous food and nightlife in Girona</h2>
                                <p> The cheapest tickets to Grand Est available within the past 7 days
                                    were $32 prices quoted are per person, round trip, for the period specified.
                                    prices and availability are subject to change. Additional terms apply. 

                                </p>
                                <button className="btn">Details</button>
                                <h3>$600</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            
                </div>
    )
}
export default ChooseYourWorld;



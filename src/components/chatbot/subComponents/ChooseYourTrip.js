import React, { Component } from 'react';
import Catalonia from "./Catalonia";
class ChooseYourTrip extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="choose-your-trip">
                    <div className="row">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="choose-your-trip-flyNow row  mb-3">
                                <div className="col-6">
                                    <Catalonia />
                                </div>
                                <div className="col-6">
                                    <Catalonia />
                                </div>
                            </div>
                            <div className="choose-your-trip-flyNow row ">
                                <div className="col-6">
                                    <Catalonia />
                                </div>
                                <div className="col-6">
                                    <Catalonia />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 order-lg-2 order-1 ">
                            <div className="choose-your-trip-details">
                                <div className="trip-details-img">
                                    <img src="imagesAndIcons/NoPath.png" className="card-img-top" alt="..." />

                                </div>
                                <div className="trip-details-overlay">
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
        );
    }
}

export default ChooseYourTrip;



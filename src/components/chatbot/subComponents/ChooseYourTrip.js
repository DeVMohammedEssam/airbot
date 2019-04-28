import React, { Component } from 'react';
import Catalonia from "./Catalonia";
import tripFilter from "../../../filterations/trip"
import Axios from 'axios';
class ChooseYourTrip extends Component {

    render() {
        return (

            <div className="container">
                <div className="choose-your-trip">
                    <div className="row">
                        <div className="col-lg-12 order-lg-1 order-2">
                            <div className="choose-your-trip-flyNow row  mb-3">

                                {tripFilter(this.props.trips, this.props.from, this.props.to, this.props.search).map((trip) => (

                                    <div className="col-3">
                                        <Catalonia id={trip.id} desc={trip.desc} arrival_Airport={trip.arrival_AirportA.city} amount={trip.amount + "$"} image={trip.image} />
                                    </div>

                                ))}


                            </div>


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ChooseYourTrip;



import React, { Component } from 'react';
import Catalonia from "./Catalonia";
import { Link } from "react-router-dom";
import Axios from "axios";
class OurTrips extends Component {
    state = {
        trips: []
    }
    componentDidMount() {
        Axios.get("https://823fd3bd.ngrok.io/api/dashboard/trips").then(({ data }) => {
            this.setState(() => ({ trips: [...data.trips] }))

        })
    }
    render() {
        return (

            <div className="OurTrips">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" >
                            <Link to="/add-trip-form" className="btn w-100 add-tip-btn" >
                                <div className="add-trip">
                                    <h1>+</h1>
                                    <h4>add trip</h4>
                                </div>
                            </Link>
                        </div>
                        {this.state.trips.map((trip) => (

                            <div className="col-3">
                                <Catalonia id={trip.id} desc={trip.desc} arrival_Airport={trip.arrival_AirportA.name} amount={trip.amount + "$"} image={trip.image} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

export default OurTrips;
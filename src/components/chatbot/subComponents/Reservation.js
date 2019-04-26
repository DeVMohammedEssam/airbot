import React, { Component } from 'react';
import ReservationInfo from "./ReservationInfo";
import Axios from 'axios';
class Reservation extends Component {
    state = {
        reservations: []
    }
    componentDidMount() {
        Axios.get("/reservations/").then(({ data }) => {
            this.setState(() => ({ reservations: data }))
        })
    }
    render() {
        return (

            <div className="Reservation">
                <div className="container">

                    <ul className="Reservation-header list-unstyled">
                        <li>Name</li>
                        <li>Country</li>
                        <li>Phone</li>
                        <li>From</li>
                        <li>To</li>
                        <li>Seat No.</li>
                    </ul>
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                    <ReservationInfo />
                </div>
            </div>

        );
    }
}



export default Reservation;
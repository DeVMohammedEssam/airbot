import React, { Component } from 'react';
import ReservationInfo from "./ReservationInfo";
import Axios from 'axios';
class Reservation extends Component {
    state = {
        reservations: [],
      
    }
    componentDidMount() {
        Axios.get("https://823fd3bd.ngrok.io/api/dashboard/reservations/").then(({ data }) => {
            this.setState(() => ({ reservations: [...data.trips]  }))
            console.log(data);
        })
    }
    render() {
        return (

            <div className="Reservation">
                <div className="container">

                    <ul className="Reservation-header list-unstyled">
                        <li>Name</li>
                        <li>From</li>
                        <li>To</li>
                        <li>Seat No.</li>
                    </ul>
                                {this.state.reservations.map((rs , i) => (
                        <ReservationInfo
                        key ={i}
                        name={rs.trip.companyA.company_name}
                        from={rs.trip.leaving_AirportA.city}
                        to={rs.trip.arrival_AirportA.city}
                        seatNo={rs.seat_no}
                     
                            />
                    ))} 

                </div>
            </div>

        );
    }
}



export default Reservation;
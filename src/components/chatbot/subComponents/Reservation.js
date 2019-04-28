import React, { Component } from 'react';
import ReservationInfo from "./ReservationInfo";
import Axios from 'axios';
class Reservation extends Component {
    state = {
        reservations: []
    }
    componentDidMount() {
        /*               Axios.get("https://823fd3bd.ngrok.io/api/dashboard/reservations/").then(({ data }) => {
                            this.setState(() => ({ reservations: [...data.reservations] }))
                            console.log(data);
                        })  */
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
                    {/*                     {this.state.reservations.map(rs => (
                        <ReservationInfo name={} country={} phone={} from={} to={} seatNo={} />
                    ))} */}

                </div>
            </div>

        );
    }
}



export default Reservation;
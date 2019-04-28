import React, { Component } from 'react';
import ReservationInfo from "./ReservationInfo";
import Axios from 'axios';
import {connect} from "react-redux"
class Reservation extends Component {
    state = {
        reservations: [],
      
    }
    componentDidMount() {
        Axios.get("/api/dashboard/reservations/").then(({ data }) => {
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
                        {this.props.user?!this.props.user.name? <li>Phone</li>:"":""}
                       
                        <li>From</li>
                        <li>To</li>
                        <li>Seat No.</li>
                    </ul>
                                {this.state.reservations.map((rs , i) => (
                        <ReservationInfo
                        key ={i}
                        company={this.props.user?!this.props.user.name?true:false:false}
                        name={rs.trip.companyA.company_name}
                        userName={rs.user.name}
                        phone={rs.user.phone}
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


const mapStateToProps=(state)=>({
    user:state.user?state.user.loggedUser:null
})
export default connect(mapStateToProps)(Reservation);
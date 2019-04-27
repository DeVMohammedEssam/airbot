import React, { Component } from 'react';
import Catalonia from "./Catalonia";
import tripFilter from "../../../filterations/trip"
class ChooseYourTrip extends Component {
    constructor(props){
        super(props)
    }
    state = {}
    render() {
        return (
     
            <div className="container">
                       {/*
            <Link className="card" to={`/add-trip-form/${props.tripId}`}>
      <div className="Catalonia">
        <div className="Catalonia-img">
          <img src="imagesAndIcons/NoPath.png" className="card-img-top" alt="..." />
        </div>
        <div className="Catalonia-overlay">
          <h6>$600</h6>
          <img src="imagesAndIcons/placeholder.png" alt="placholder" />
          <h3>Catalonia</h3>
          <h5>Fabulous food and nightlife in Girona</h5>
        </div>
      </div>
    </Link>    
        */}
                <div className="choose-your-trip">
                    <div className="row">
                        <div className="col-lg-12 order-lg-1 order-2">
                            <div className="choose-your-trip-flyNow row  mb-3">
                                {tripFilter(this.props.trips,this.props.from,this.props.to,this.props.search).map((trip)=>(
                                    
 <div className="col-3">
                                    <Catalonia id={trip.id} desc={trip.desc} arrival_Airport={trip.arrival_AirportA.name} amount={trip.amount+"$"} image={trip.image} />
                                </div>
                                ))}
                               
            
                            </div>
                         

                        </div>
                       {/* <div className="col-lg-6 order-lg-2 order-1 ">
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
                        </div> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default ChooseYourTrip;



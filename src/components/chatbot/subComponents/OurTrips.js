import React from "react";
import Catalonia from "./Catalonia";
import { Link } from "react-router-dom";
const OurTrips = () => {
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
                    <div className="col-lg-3"><Catalonia /></div>
                    <div className="col-lg-3"><Catalonia /></div>
                    <div className="col-lg-3"><Catalonia /></div>

                </div>
            </div>
        </div>

    )
}
export default OurTrips;
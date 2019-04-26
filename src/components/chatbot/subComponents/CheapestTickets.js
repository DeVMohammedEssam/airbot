import React from "react";

const CheapestTickets = (props) => {
    return (
        <div className="CheapestTickets col-lg-4">
            <div className="card">
                <img src={props.img} alt="..." />
                <div className="card-body">
                    <p className="card-text">The cheapest tickets to Grand Est available within the past
                                            7 days were $312 prices quoted are per person, round trip
                                            for the period specified. pricea and availability are subject to
                                             change.
                      </p>
                </div>

            </div>
        </div>

    )
}
export default CheapestTickets;
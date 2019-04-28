import React from "react";

const ReservationInfo = (props) => {
    return (
        <div className="ReservationInfo">
            <ul className="list-unstyled">
                <li>{props.name}</li>
                <li>{props.from}</li>
                <li>{props.to}</li>
                <li>{props.seatNo}</li>
            </ul>

        </div>



    )
}
export default ReservationInfo;
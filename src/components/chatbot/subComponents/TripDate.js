import React from "react";


const TripDate = (props) => {
  return (

    <div className="TripDate">
      <img className="TripDate-img" src="imagesAndIcons/calendar.png" alt="..." />
       <div className="TripDate-input">
       <h6>{props.dateContent}</h6>
      <input type="date" placeholder="15/4/2019"/>
       </div>
    
      </div>
    
  )
}
export default TripDate;
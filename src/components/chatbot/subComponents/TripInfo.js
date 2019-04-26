import React from "react";

const TripInfo = (props) => {
  return (

    <div className="TripInfo">
      <img className="TripInfo-img" src={props.imge} alt="..." />
       <div className="TripInfo-input">
       <h6>{props.infoHeader}</h6>
      <input type={props.type} placeholder={props.placeholder}/>
       </div>
    
      </div>
    
  )
}
export default TripInfo;
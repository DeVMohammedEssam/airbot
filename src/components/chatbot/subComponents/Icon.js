import React from "react";

const Icon = (props) => {
    return (
          <div className="Icon text-center">
          <h3><i className={props.icon}></i></h3>
          <h5>{props.title}</h5>
          <p>{props.number} </p>
          </div>
           
       

    )
}
export default Icon;
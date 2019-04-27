import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Catalonia = (props) => {
 
  return  ( //if company


//if traveller
<Link to={`/trip/${props.id}`}>

      <div className="card" >
        <div className="Catalonia">
          <div className="Catalonia-img">
            <img src={props.image} className="card-img-top" alt="..." />
          </div>
          <div className="Catalonia-overlay">
            <h6>{props.amount}</h6>
            <img src="imagesAndIcons/placeholder.png" alt="placholder" />
            <h3>{props.arrival_Airport?props.arrival_Airport:""}</h3>
            <h5>{props.desc}</h5>
          </div>
        </div>
      </div>
      </Link>
    );
  
}
const mapStateToProps = (state) => ({
  loggedUser: state.user.loggedUser
})
export default connect(mapStateToProps)(Catalonia);
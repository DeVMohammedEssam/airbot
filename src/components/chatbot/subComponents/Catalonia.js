import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Catalonia = (props) => {
  if(props.loggedUser){
  return props.loggedUser.type === 1 ? ( //if company
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
  ) : (
//if traveller
      <div className="card" to={`/add-trip-form/${props.tripId}`}>
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
      </div>
    );
  }else{
    return ( <div> Not Logged </div>)
  }

}
const mapStateToProps = (state) => ({
  loggedUser: state.user.loggedUser
})
export default connect(mapStateToProps)(Catalonia);
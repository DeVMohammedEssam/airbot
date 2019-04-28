import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const StaffMember = (props) => (
    <Link to={`/edit-staff-form/${props.id}`} className="StaffMember">
        <h2>{props.name}</h2>
        <h3>{props.age} Years</h3>
    </Link>
);

const mapStateToProps = (state) => ({
    loggedUser: state.user.loggedUser
})
export default connect(mapStateToProps)(StaffMember);
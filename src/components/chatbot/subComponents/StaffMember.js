import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const StaffMember = (props) => {
    if (props.loggedUser) {
        return props.loggedUser.type === 1 ?
            (
                <Link to={`/edit-staff-form/${props.id}`} className="StaffMember">
                    <h2>Ahmed Adel</h2>
                    <h3>18 Years</h3>
                </Link>
            ) :
            (
                <div className="StaffMember">
                    <h2>Ahmed Adel</h2>
                    <h3>18 Years</h3>
                </div>
            )
    } else {
        return (/* just for test */
            <Link to={`/edit-staff-form/${props.id}`} className="StaffMember">
                <h2>Ahmed Adel</h2>
                <h3>18 Years</h3>
            </Link>
        )
    }

}

const mapStateToProps = (state) => ({
    loggedUser: state.user.loggedUser
})
export default connect(mapStateToProps)(StaffMember);
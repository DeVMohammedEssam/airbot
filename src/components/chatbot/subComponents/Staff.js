import React, { Component } from 'react';
import StaffMember from "./StaffMember";
import { Link } from "react-router-dom";
import Axios from 'axios';
class Staff extends Component {
    state = {
        staff: []
    }
    componentDidMount() {
        Axios.get("/staff/").then(({ data }) => {
            this.setState(() => ({ staff: data }))
        })
    }
    render() {
        return (
            <div className="Staff">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="add">
                                <Link to="/add-staff-form">
                                    <h1>+</h1>
                                </Link>

                            </div>
                        </div>
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /></div>
                        <div className="col-lg-3"> <StaffMember /> </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /></div>
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /> </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /></div>
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /> </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /></div>
                        <div className="col-lg-3"> <StaffMember /> </div>
                        <div className="col-lg-3"> <StaffMember /> </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default Staff;
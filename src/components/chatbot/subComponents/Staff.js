import React, { Component } from 'react';
import StaffMember from "./StaffMember";
import { Link } from "react-router-dom";
import Axios from 'axios';
class Staff extends Component {
    state = {
        staff: []
    }
    componentDidMount() {
        Axios.get("https://823fd3bd.ngrok.io/api/dashboard/staff/").then(({ data }) => {
            this.setState(() => ({ staff: data.staff }))
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
                        {this.state.staff.map(st=>(
                        <div className="col-lg-3">
                            <StaffMember name={st.name} age={st.age} id={st.id}/>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Staff;
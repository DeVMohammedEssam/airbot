import React, { Component } from 'react';
import Axios from 'axios';
class AddStaffForm extends Component {
    state = {
        name: "",
        age: "",
        gender: "male"
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("/staff/add", { data: this.state }).then(({ data }) => {
            if (data.success === true) {
                this.props.history.push("/dashboard")
            } else {
                console.log("add staff error");
            }
        })
    }
    render() {
        return (
            <div className="d-flex  align-items-center bg-dark" style={{ minHeight: "100vh" }} >
                <form className="card container " onSubmit={this.handleSubmit}>
                    <div className="form-group card-body">
                        <label>Name:</label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Enter member name.."
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group card-body">
                        <label>Age:</label>
                        <input
                            required
                            type="number"
                            name="age"
                            placeholder="Enter member age.."
                            onChange={this.handleInputChange}
                            value={this.state.age}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group card-body">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            onChange={this.handleInputChange}
                            defaultValue={this.state.age}
                            className="form-control"
                        >
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div className="form-group card-body">
                        <button type="submit" className="btn btn-warning">Add Member</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddStaffForm;
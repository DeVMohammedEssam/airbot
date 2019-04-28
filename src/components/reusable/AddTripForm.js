import React, { Component } from 'react';
import ImageFileReader from "./ImageFileReader";
import { withRouter } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
class AddTripForm extends Component {
    state = {
        arrivalTime: "",
        leavingTime: "",
        leavingAirport: "",
        arrivalAirport: "",
        seatsNumber: "",
        amount: "",
        tax: "",
        discount: "",
        finalAmount: "",
        plane: "",
        imageFileReader: "",
        staffLeader: "",
        airports: [],
        airplanes: [],
        staff: []
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        if (name === "imageFileReader") {
            let reader = new FileReader();
            let file = $(".upload-image__file")[0].files[0]
            reader.onloadend = () => {
                $(".upload-image").css("background-image", "url(" + reader.result + ")");
                this.setState(() => ({ [name]: reader.result }))
            }
            reader.readAsDataURL(file);

        } else {
            this.setState(() => ({ [name]: value }));
        }
    }
    handleAddTripSubmit = (e) => {
        e.preventDefault();
        const modifiedTrip = {
            arrival_Time: this.state.arrivalTime,
            arrival_Airport: this.state.arrivalAirport,
            leaving_Time: this.state.leavingTime,
            leaving_Airport: this.state.leavingAirport,
            seats_numer: this.state.seatsNumber,
            amount: this.state.amount,
            tax: this.state.tax,
            discount: this.state.discount,
            final_Amount: this.state.finalAmount,
            plane_id: this.state.plane,
            image: this.state.imageFileReader,

        }
        axios.post("https://823fd3bd.ngrok.io/api/dashboard/trip/", { data: { ...modifiedTrip } }).then(({ data }) => {
            if (data.success) {
                this.props.history.push("/dashboard");
            } else {
                console.log("trip add error");
            }
        })
    }
    componentDidMount() {
        axios.get("https://823fd3bd.ngrok.io/api/airports").then(({ data }) => {
            this.setState(() => ({ airports: [...data.airports] }))

        })
        axios.get("https://823fd3bd.ngrok.io/api/airplanes").then(({ data }) => {
            this.setState(() => ({ airplanes: [...data.airplanes] }))

        })

        axios.get("https://823fd3bd.ngrok.io/api/dashboard/staff/").then(({ data }) => {
            this.setState(() => ({ staff: data.staff }));

        })

    }
    render() {
        return (
            <form onSubmit={this.handleAddTripSubmit} className="add-trip-form d-flex align-items-center  ">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group col-12">
                                    <ImageFileReader onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Arrival Time</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.arrivalTime}
                                        name="arrivalTime" type="date" className="form-control" />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Leaving Time</label>
                                    <input
                                        required
                                        value={this.state.leavingTime}
                                        onChange={this.handleInputChange}
                                        name="leavingTime" type="date" className="form-control" />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Leaving Airport</label>
                                    <input
                                        required

                                        onChange={this.handleInputChange}
                                        value={this.state.leavingAirport}
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Leaving Airport.."
                                        name="leavingAirport"
                                        list="airports" />
                                    <datalist id="airports">
                                        {
                                            this.state.airports.map((airport) => (
                                                <option value={airport.id} key={airport.id}>{airport.state}</option>
                                            ))
                                        }
                                    </datalist>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label>Arrival Airport</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.arrivalAirport}
                                        className="form-control"
                                        placeholder="Arrival Airport.." name="arrivalAirport" list="airports" />
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label>Seats Number</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.seatsNumber}
                                        type="number"
                                        name="seatsNumber"
                                        className="form-control"
                                        placeholder="seats number.." />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Staff Leader</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.staffLeader}
                                        className="form-control"
                                        placeholder="staff leader.."
                                        autoComplete="off"
                                        name="staffLeader"
                                        list="staff" />
                                    <datalist id="staff">
                                        {
                                            this.state.staff.map((st) => (<option value={st.id} key={st.id}>{st.name}</option>))
                                        }
                                    </datalist>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label>Amount</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.amount}
                                        className="form-control"
                                        placeholder="Amount.."
                                        name="amount"
                                        type="number"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label>Tax</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.tax}
                                        className="form-control"
                                        placeholder="Tax.."
                                        name="tax"
                                        type="number"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label>Discount</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.discount}
                                        className="form-control"
                                        placeholder="Discount.."
                                        name="discount"
                                        type="number"
                                    />
                                </div>
                                <div className="form-group col-8">
                                    <label>Final Amount</label>
                                    <input
                                        required
                                        onChange={this.handleInputChange}
                                        value={this.state.finalAmount}
                                        className="form-control"
                                        placeholder="Final Amount.."
                                        name="finalAmount"
                                        type="number"
                                    />
                                </div>
                                <div className="form-group  col-12 ">
                                    <label >Plan Id</label>
                                    <input
                                        required
                                        value={this.state.plane}
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Plan ID.." name="plane" list="plans" />
                                    <datalist id="plans">
                                        {
                                            this.state.airplanes.map((ap) => (
                                                <option value={ap.id} key={ap.id}>{ap.model}</option>
                                            ))
                                        }
                                    </datalist>
                                </div>

                            </div>
                            <button
                                type="submit"
                                className="btn btn-warning mt-5 w-25  float-right">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(AddTripForm);
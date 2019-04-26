import React, { Component } from 'react';
import ImageFileReader from "./ImageFileReader";
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
        planId: "",
        imageFileReader: ""
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
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
        axios.post("https://4373f0d8.ngrok.io/api/trip/", { data: { ...this.state } }).then(({ data }) => {
            if (data.success) {
                this.props.history.push("/dashboard");
            } else {
                console.log("trip add error");
            }
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
                                        placeholder="Leaving Airport.."
                                        name="leavingAirport"
                                        list="airports" />
                                    <datalist id="airports">
                                        <option >California Airport</option>
                                        <option >Cazablanka Airport</option>
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
                                        value={this.state.planId}
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        placeholder="Plan ID.." name="planId" list="plans" />
                                    <datalist id="plans">
                                        <option >FF22t454Af</option>
                                        <option >47EsF78qL2</option>
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

export default AddTripForm;
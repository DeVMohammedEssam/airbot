import React, { Component } from 'react';
import axios from "axios";
import ImageFileReader from "./ImageFileReader";
import {withRouter} from "react-router-dom";
class EditTripForm extends Component {
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
        imageFileReader:"",
        airports:[],
        airplanes:[],
        staff:[]

    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }))
    }
    handleAddTripSubmit =(e)=> {
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
        const { id } = this.props.match.params;
        axios.post(`https://823fd3bd.ngrok.io/api/dashboard/trip/${id}` , {data:modifiedTrip}).then(({ data }) => {
            this.props.history.push("/dashboard");
        });
    }
    deleteTrip = (e)=> {
        axios.delete(`https://823fd3bd.ngrok.io/api/dashboard/trip/${this.props.match.params.id}`).then(() => {
            this.props.history.push("/trips");
        })
    }
     formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
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
        //will retrieve trip 
        axios.get(`https://823fd3bd.ngrok.io/api/trip/${this.props.match.params.id}`).then(({data})=>{
            console.log(data);
            this.setState(()=>({
                arrivalTime: this.formatDate(data.trip.arrival_Airport),
                leavingTime:this.formatDate(data.trip.leaving_Time),
                leavingAirport:data.trip.leaving_Airport,
                arrivalAirport:data.trip.arrival_AirportA.id,
                seatsNumber:data.trip.seats_numer,
                amount:data.trip.amount,
                tax:data.trip.tax,
                discount:data.trip.discount,
                finalAmount:data.trip.final_Amount,
                planId:data.trip.planeA.id,
                imageFileReader: data.trip.image

            }))
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
                                <ImageFileReader defaultValue={this.state.imageFileReader} onChange={this.handleInputChange} />
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
                                    value={this.state.planId}
                                    onChange={this.handleInputChange}
                                    className="form-control"
                                    placeholder="Plane ID.." name="planId" list="plans" />
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
                            className="btn btn-warning mt-5 w-50  float-right">
                            Update
                        </button>
                        <button
                            onClick ={this.deleteTrip}
                            type="button"
                            className="btn btn-danger mt-5 w-50  float-left">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </form>
        );
    }
}

export default withRouter(EditTripForm);
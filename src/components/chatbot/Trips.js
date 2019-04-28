import React, { Component } from "react";
import TripInfo from "../chatbot/subComponents/TripInfo";
import TripDate from "../chatbot/subComponents/TripDate";
import ChooseYourTrip from "./subComponents/ChooseYourTrip";
import Footer from "../reusable/Footer"
import $ from "jquery";
import axios from "axios"

class Trips extends Component {

    state = {
        trips: [],
        to: "",
        search: null,
        from: "",
        spans: ['Flying from', 'Fling To', 'Travellers'],
        dateHeader: ['Departing', 'Returning'],
        infoHeaders: ['Flying from', 'Flying to', 'Traveller'],
        types: ['text', 'number'],
        placeholders: ['City', '1'],
        images: ['imagesAndIcons/placeholder.png', 'imagesAndIcons/multiple-users-silhouette.png']
    }
    onFromChange = (e) => {
        console.log(e.target.value)
        this.setState({ from: e.target.value })
    }
    onToChange = (e) => {
        console.log(e.target.value)
        this.setState({ to: e.target.value })

    }
    componentDidMount = () => {
        console.log(this.props)
         this.setState({ search: this.props.location.search ? this.props.location.search.split("=")[1] : null }) 
        $(".one-way").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        })

        $(".round-trip").click(function () {
            $(this).addClass("active").siblings().removeClass("active");

        })
        $(".multi-destination").click(function () {
            $(this).addClass("active").siblings().removeClass("active");

        })

        /* retrieving trips */
        axios.get("/api/trips").then((response) => {
            if (response.data.success) {
                this.setState({ trips: response.data.trips })
            }
        })

    }
    render() {

        return (
            <div className="Trips">
                <div className="container">
                    <h1>Get Your Trip</h1>
                    <img className="trips-img" src="imagesAndIcons/illustration-generic.png" alt="..." />
                    <div className="TripType">
                        <span className="one-way active">One-Way</span>
                        <span className="round-trip">Round-Trip</span>
                        <span className="multi-destination">Multi-Destination</span>
                    </div>
                    <div className="flying">
                        <TripInfo
                            onChange={this.onFromChange}
                            infoHeader={this.state.infoHeaders[0]}
                            type={this.state.types[0]}
                            placeholder={this.state.placeholders[0]}
                            imge={this.state.images[0]}
                        />

                        <TripInfo
                            onChange={this.onToChange}
                            infoHeader={this.state.infoHeaders[1]}
                            type={this.state.types[0]}
                            placeholder={this.state.placeholders[0]}
                            imge={this.state.images[0]}
                        />
                    </div>
                    <div className="flying">
                        {/*
                        <TripDate dateContent={this.state.dateHeader[0]} />
                        <TripDate dateContent={this.state.dateHeader[1]} />
                        <TripInfo
                            infoHeader={this.state.infoHeaders[2]}
                            type={this.state.types[1]}
                            placeholder={this.state.placeholders[1]}
                            imge={this.state.images[1]}
                        />
                       */}

                    </div>
                    {
                        /*
  <select className="by-price">
                         <option>by price</option>
                         <option>ay 7aga</option>
                     </select>
   <button className="search-btn">Search</button>
                        */
                    }




                </div>
                <div className="cheapest-tickets">
                    <p>The cheapest tickets to Grand Est available within the past 7 days were $312.
                        Prices quoted are per person, round trips,for the period specified.
                        Prices and availabilty are subject tochange.Additional terms apply.

                   </p>
                    <div className="many-trips">
                        <img className="manyTrip-img" src="imagesAndIcons/tag.png" alt="..." />
                        <h4>Many trips with discount more than 50%
                       <span className="show-all">show all</span>
                        </h4>

                    </div>
                </div>
                <ChooseYourTrip to={this.state.to} from={this.state.from} search={this.state.search} trips={this.state.trips} />
                <Footer />
            </div>

        )
    }
}
export default Trips;
import React, { Component } from "react";
import CheapestTickets from "./subComponents/CheapestTickets";
import TravelerBenfits from "./subComponents/TravelerBenfits";
import GreyFooter from "../reusable/GreyFooter";


class Chatbot extends Component {
  state = {
    images: ["imagesAndIcons/worldwide.png", "imagesAndIcons/robotic.png", "imagesAndIcons/world.png"]

  }
  render() {

    return (


      <div className="Chatbot">
        <div className="container">
          <div className="Chatbot-header">
            <h1>Air Chatbot</h1>
            <p>Get your live world , be active with air life</p>
          </div>

          <div className="row">

            <CheapestTickets img={this.state.images[0]} />
            <CheapestTickets img={this.state.images[1]} />
            <CheapestTickets img={this.state.images[2]} />
          </div>
          <div className="row">
            <TravelerBenfits />
            <TravelerBenfits />
          </div>


        </div>

        <GreyFooter />
      </div>
    );
  }
}
export default Chatbot;

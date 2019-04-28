import React, { Component } from "react";
import Header from "./subComponents/Header";
import ChooseYourWorld from "./subComponents/ChooseYourWorld";
import Footer from "../reusable/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        
          <ChooseYourWorld />
        <Footer />
      </div>
    );
  }
}
export default Home;

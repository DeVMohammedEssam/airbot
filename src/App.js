import React, { Component } from "react";
import Navbar from "./components/reusable/Navbar";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "./components/chatbot/subComponents/LoginModal";
import { connect } from "react-redux";

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/*           {this.props.error && (<div className="alert alert-danger flash-message">this.props.error</div>)}
 */}          <LoginModal />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default connect(mapStateToProps)(App);

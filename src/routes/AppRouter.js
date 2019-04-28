import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/chatbot/Home";
import DashBoard from "../components/chatbot/DashBoard";
import Price from "../components/chatbot/Price";
import Trips from "../components/chatbot/Trips";
import AddTripForm from "../components/reusable/AddTripForm";
import EditTripForm from "../components/reusable/EditTripForm";
import AddStaffForm from "../components/reusable/AddStaffForm";
import Trip from "../components/Trip";
import Chatbot from "../components/chatbot/Chatbot";
import EditStaffForm from "../components/reusable/EditStaffForm";
import { connect } from "react-redux";
import ProtectedRoute from "../components/reusable/ProtectedRoute";
import PageNotFound from '../components/reusable/PageNotFound';
import Reservation from "../components/chatbot/subComponents/Reservation";
class AppRouter extends Component {
  state = {
    type: undefined
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loggedUser != prevState.loggedUser) {
      return { type: nextProps.loggedUser.type };

    }
    else return null;
  }

  render() {
    if (this.state.type) {
      if (this.state.type == 1) {
        return (
          <React.Fragment>
            <Switch>
              <ProtectedRoute path="/dashboard" component={DashBoard} />
              <ProtectedRoute path="/add-trip-form" component={AddTripForm} />
              <ProtectedRoute path="/edit-trip-form/:id" component={EditTripForm} />
              <ProtectedRoute path="/add-staff-form" component={AddStaffForm} />
              <ProtectedRoute path="/edit-staff-form/:id" component={EditStaffForm} />
              <ProtectedRoute path="/reservations" component={Reservation} />
              <Route exact={true} path="/" component={Home} />
              <Route path="/chatbot" component={Chatbot} />
              <Route path="/price" component={Price} />
              {/* only reserved for companies */}
              <Route path="/trips" component={Trips} />
              <Route path="/trip/:id" component={Trip} />
              <Route component={PageNotFound} />

            </Switch>
          </React.Fragment>
        )
      }
    }
    else {
      return (
        <React.Fragment>
          <Switch>
            <ProtectedRoute path="/reservations" component={Reservation} />
            <Route exact={true} path="/" component={Home} />
            <Route path="/chatbot" component={Chatbot} />
            <Route path="/price" component={Price} />
            {/* only reserved for companies */}
            <Route path="/trips" component={Trips} />
            <Route path="/trip/:id" component={Trip} />
            <Route component={PageNotFound} />
          </Switch>
        </React.Fragment>
      );

    }

  }
}


const mapStateToProps = (state) => ({ loggedUser: state.user.loggedUser });
export default connect(mapStateToProps)(AppRouter);

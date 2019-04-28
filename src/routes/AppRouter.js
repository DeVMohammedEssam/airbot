import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/chatbot/Home";
import DashBoard from "../components/chatbot/DashBoard";
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
class AppRouter extends Component {

  state = {
    type: "1"
  }
  /*   static getDerivedStateFromProps(nextProps, prevState) {
      console.log(nextProps)
      if (nextProps.loggedUser)
        if (nextProps.loggedUser.type !== prevState.loggedUser.type) {
          return { type: nextProps.loggedUser.type };
        }
        else return null;
    } */

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/chatbot" component={Chatbot} />
          {/* only reserved for companies */}

          <ProtectedRoute path="/dashboard" component={() => (
            this.state.type === "1" ? (
              <DashBoard />
            ) : (
                <PageNotFound />
              )

          )} />
          <ProtectedRoute path="/add-trip-form" component={AddTripForm} />
          <ProtectedRoute path="/edit-trip-form/:id" component={EditTripForm} />
          <ProtectedRoute path="/add-staff-form" component={AddStaffForm} />
          <ProtectedRoute path="/edit-staff-form/:id" component={EditStaffForm} />

          <Route path="/trips" component={Trips} />
          <Route path="/trip/:id" component={Trip} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => ({ loggedUser: state.user.loggedUser });
export default connect(mapStateToProps)(AppRouter);

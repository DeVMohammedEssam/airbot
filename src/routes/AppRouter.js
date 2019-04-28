import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/chatbot/Home";
import DashBoard from "../components/chatbot/DashBoard";
<<<<<<< HEAD
import Price from "../components/chatbot/Price";

import { Route, Switch, Redirect } from "react-router-dom";
=======
>>>>>>> 271b7d5f4f815e2eaa21868fdf31332f6b983530
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



<<<<<<< HEAD
const AppRouter = (props) => {
  return (
    <React.Fragment>
      <Switch>
        {props.loggedUser ? (
          <Redirect exact from="/" to="/trips" />
        ) : (
            <Route exact={true} path="/" component={Home} />
          )}

        <Route path="/chatbot" component={Chatbot} />
        <Route path="/trips" component={Trips} />
        <Route path="/trip/:id" component={Trip} />
        <Route path="/DashBoard" component={DashBoard} />
        <Route path="/Price" component={Price} />

        <Route path="/add-trip-form" component={AddTripForm} />
        <Route path="/edit-trip-form/:id" component={EditTripForm} />
        <Route path="/add-staff-form" component={AddStaffForm} />
        <Route path="/edit-staff-form/:id" component={EditStaffForm} />
      </Switch>
    </React.Fragment>
  );
};
=======
>>>>>>> 271b7d5f4f815e2eaa21868fdf31332f6b983530
const mapStateToProps = (state) => ({ loggedUser: state.user.loggedUser });
export default connect(mapStateToProps)(AppRouter);

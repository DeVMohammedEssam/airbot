import React from "react";
import Chatbot from "../components/chatbot/Chatbot";
import Home from "../components/chatbot/Home";
import DashBoard from "../components/chatbot/DashBoard";
import Price from "../components/chatbot/Price";

import { Route, Switch, Redirect } from "react-router-dom";
import Trips from "../components/chatbot/Trips";
import AddTripForm from "../components/reusable/AddTripForm";
import EditTripForm from "../components/reusable/EditTripForm";
import AddStaffForm from "../components/reusable/AddStaffForm";
import Trip from "../components/Trip";

import EditStaffForm from "../components/reusable/EditStaffForm";
import { connect } from "react-redux";

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
const mapStateToProps = (state) => ({ loggedUser: state.user.loggedUser });
export default connect(mapStateToProps)(AppRouter);

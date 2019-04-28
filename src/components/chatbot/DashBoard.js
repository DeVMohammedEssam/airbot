import React, { Component } from "react";
import OurTrips from "./subComponents/OurTrips";
import Staff from "./subComponents/Staff";
import Analysis from "./subComponents/Analysis";
import Reservation from "./subComponents/Reservation";
import Footer from "../reusable/Footer";

import $ from "jquery";

class DashBoard extends Component {
    state = {

    }
    componentDidMount = () => {

        $(".Staff").hide();
        $(".Analysis").hide();
        $(".Reservation").hide();

        $(".OurTrips-click").click(function () {
            $(".OurTrips").show();
            $(".Staff").hide();
            $(".Analysis").hide();
            $(".Reservation").hide();
            $(this).addClass("active").siblings().removeClass("active");
        });
        $(".Staff-click").click(function () {
            $(".Staff").show();
            $(".OurTrips").hide();
            $(".Analysis").hide();
            $(".Reservation").hide();
            $(this).addClass("active").siblings().removeClass("active");
        });
        $(".Analysis-click").click(function () {
            $(".Analysis").show();
            $(".OurTrips").hide();
            $(".Staff").hide();
            $(".Reservation").hide();
            $(this).addClass("active").siblings().removeClass("active");
        });
        $(".Reservation-click").click(function () {
            $(".Reservation").show();
            $(".OurTrips").hide();
            $(".Staff").hide();
            $(".Analysis").hide();
            $(this).addClass("active").siblings().removeClass("active");
        });

    }
    render() {

        return (
            <div className="DashBoard">

                <div className="DashBoard-Header">
                    <ul className="DashBoard-nav list-unstyled">
                        <li className="OurTrips-click active">Trips</li>
                        <li className="Staff-click"> Staff</li>
                        <li className="Reservation-click">Reservation</li>
                        <li className="Analysis-click">Analysis</li>

                    </ul>
                    <span className="slider"></span>
                </div>
                <OurTrips />
                <Staff />
                <Analysis />
                <Reservation />
            </div>




        )
    }
}
export default DashBoard;
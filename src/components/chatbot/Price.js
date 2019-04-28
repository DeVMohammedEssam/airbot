import React, { Component } from "react";
import GreyFooter from "../reusable/GreyFooter";
class Price extends Component {
    render() {
        return (
            <div className="Price">

                <div className="container">
                    <div className="Price-header">
                        <h1>Price <span>for companies</span></h1>
                        <p>Increase your world sights , Market your trips and save your mony</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="free">
                                <h4 className="text-center">Free</h4>
                                <p className="text-center">Basic functionality to get started </p>
                                <h4 className="text-center">$0/mo</h4>
                                
                                <span>Company profile</span>
                                
                                <span>Dashboard</span>
                                
                                <span>Upload trips</span>
                                
                                <span>Upload offers</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="pro-plan">
                                <h4 className="text-center">Free</h4>
                                <p className="text-center">A fixed fee add-on to pro olan </p>
                                <h4 className="text-center">$10/mo</h4>
                                
                                <span>Company profile</span>
                                
                                <span>Dashboard</span>
                                
                                <span>Upload trips</span>
                                
                                <span>Upload offers</span>
                                <span>Marketing</span>
                                <span>Bot broadcast</span>
                                <button className="btn btn-primary">Contact Us</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="FAQ">
                                <h4>What is your refund policy ?</h4>
                                <p>We srive to build the best airplane companies
                                    Marketing platform in the world.
                                    if you are unhappy with Airbot
                                    for any reason, we provide a
                                    "no-questions 30-day refund".
                                    more details in our terms of use.
               
                 </p>
                                <h4>Where do I find my invoice ?</h4>
                                <p>you can find your monthly invoice under the 'settings'
                                    tab in your profile's dashboard.
                                    Click on 'Payments' and you will see
                                    the receipt icon next to the amount for each month.
               
                 </p>
                                <h6>Have a question or just want to say ? Check FAQ</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <GreyFooter />

            </div>

        );
    }
}
export default Price;
import React from "react";
const GreyFooter = () => {
    return (
        <div className="GreyFooter">
            <div className="Footer-Left"></div>
            <div className="Messenger"><img className="Messenger-img" src="imagesAndIcons\messenger-10.png" alt="..." /></div>
            <div className="ContactUs">
              <h3>Contact us</h3>
              <ul className="list-unstyled">
              <li><a href="#">FaceBook</a></li>
                     <li><a href="#">Twitter</a></li>
                     <li><a href="#">Linkedin</a></li>
                 </ul>
              </div>
            <div className="services">
        
              <div className="left-services">
              <h3>Services</h3>
              <ul className="list-unstyled">
                     <li><a href="#">Low Cost Flights</a></li>
                     <li><a href="#">Travel Blog</a></li>
                     <li><a href="#">Accommodations</a></li>
                 </ul>
              </div>
              <hr/>
              <div className="right-services">
              <h3>Services</h3>
              <ul className="list-unstyled">
              <li><a href="#">Low Cost Flights</a></li>
                     <li><a href="#">Travel Blog</a></li>
                     <li><a href="#">Accommodations</a></li>
                 </ul>
              </div>
            </div>
            <div className="airBot-team">
              <h3>Powered By Airbot Team (c) 2019</h3>
              <ul className="list-unstyled">
              <li><a href="#">Privacy</a></li>
                     <li><a href="#">Polices</a></li>
                     <li><a href="#">Site help</a></li>
                 </ul>
              </div>

        </div>
    )
}
export default GreyFooter;
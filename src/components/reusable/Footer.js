import React from "react";
const Footer = () => {
    return (
        <div className="Footer">
           <div className="plan"><img className="paln" src="imagesAndIcons/air-transport.png" alt="..." /></div> 
            <div className="Footer-Left"></div>
            <div className="head-phone"><img className="head-phone-img" src="imagesAndIcons\makefg.png" alt="..." /></div>
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
export default Footer;
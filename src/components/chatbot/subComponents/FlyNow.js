import React from "react";
const FlyNow = () => {
    return (

        <div className="card">
           <div className="fly-now">
           <div className="fly-now-img">
           <img src="imagesAndIcons/NoPath.png" className="card-img-top" alt="..." />

           </div>
           <div className="fly-now-overlay">
             <img src="imagesAndIcons/placeholder.png" alt="placholder"/>
             <h4>Fabulous food and nightlife in Girona</h4>
           </div>
           </div>
            
            <div className="card-body">
            <h3>Fly Now</h3>
            <span>$600</span>
            </div>
        </div>

    )
}
export default FlyNow;
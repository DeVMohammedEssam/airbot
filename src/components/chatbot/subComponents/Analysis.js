import React from "react";
import Icon from "./Icon";
import axios from "axios"
 class Analysis extends React.Component {
     state={
         staff:0,
         reservations:0,
         trips:0
     }
     componentDidMount(){
         axios.get("/api/dashboard/reservations").then((response)=>{
             this.setState({reservations:response.data.trips?response.data.trips.length:0})
         })
            axios.get("/api/dashboard/trips").then((response)=>{
            this.setState({trips:response.data.trips?response.data.trips.length:0})
         })
            axios.get("/api/dashboard/staff").then((response)=>{
             this.setState({staff:response.data.staff?response.data.staff.length:0})
         })
     }
  render() {
    return (
     
             <div className="Analysis">
          
        <div className="container">
        <div className="row">
             <div className="col-lg-4"><Icon title="Trips" icon="fa fa-plane" number={this.state.trips} /></div>
             <div className="col-lg-4"><Icon  title="reservations" icon="fa fa-ticket-alt" number={this.state.reservations} /></div>
             <div className="col-lg-4"><Icon title="staff" icon="fa fa-users" number={this.state.staff}/></div>
          </div>
        </div>
           
        </div>
     
    )
  }
}


export default Analysis;
import React, { Component } from 'react'
import axios from "axios"
import {connect} from 'react-redux'
 class Trip extends Component {
    constructor(props){
        super(props)
        this.state={
            trip:{
                arrival_AirportA:{},
                leaving_AirportA:{},
                companyA:{},
                planeA:{}

            }
        }
    }
    componentDidMount=()=>{
        const id=this.props.match.params.id
        console.log("ID ",id)
        axios.get("http://localhost:5000/api/trip/"+id).then((response)=>{
            this.setState({trip:response.data.trip});
        })
    }
  render() {
      let trip=this.state.trip;

    return (
       
      <div className="trip">
        <div className="container">
             {trip?
               <div className="row">
                <div className="col-md-3">
                    <div className="trip__aside">
                       
                        <div className="trip__aside__item">
                            <img src={trip.companyA.logo_url} className="trip__aside__item__img" />
                                  <div className="trip__aside__item__info">
                                      <h5>company info</h5>
                                      <hr />
                                    <p>Name : {trip.companyA.company_name}</p>
                                      <p>address : {trip.companyA.address}</p>
                                      <a target="__blank" href={trip.companyA.facebook_url}><p>facebook</p></a>
                                      <a target="__blank" href={trip.companyA.twitter_url}><p>twitter</p></a>
                                      <a target="__blank" href={trip.companyA.linkidin_url}><p>linkedin</p></a>
                                   
             
                              </div>
                                    
                        </div>
                         <div className="trip__aside__item">
                            <img src={trip.image} className="trip__aside__item__img" />
                        </div>
                  
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="trip__content">
                        <div className="trip__content__item">
                            <h5 className="trip__content__item__header">
                                trip info
                            </h5>
                            <hr />
                            <div className="trip__content__item__info">
                            <p>From : {trip.leaving_AirportA.country}</p>
                            <p>To :  {trip.arrival_AirportA.country}</p>
                            <p>available Seats : {trip.seats_numer}</p>
                            <p>description : {trip.desc}</p>
                          
                            </div>
                            
                        </div>

                         <div className="trip__content__item">
                            <h5 className="trip__content__item__header">
                                trip budget
                            </h5>
                            <hr />
                            <div className="trip__content__item__info">
                            <p>price : {trip.amount}  </p>
                            <p>discount  : {trip.discount} </p>
                            <p>tax : {trip.tax} </p>
                            <p>final price : {trip.final_Amount}</p>
                          
                            </div>
                            
                        </div>
                         <div className="trip__content__item">
                            <h5 className="trip__content__item__header">
                               trip plane
                            </h5>
                            <hr />
                            <div className="trip__content__item__info">
                            <p>model : {trip.planeA.model} </p>
                            <p>capacity  : {trip.planeA.seating_capacity} </p>
                          
                            </div>
                            
                        </div>
                      
                         <div className="trip__content__item">
                            <div className="trip__content__item__btns">
                               {this.props.user?
                            <React.Fragment>
                                <button className="trip__content__item__btn btn btn-primary">
                                 Reserve it
                             </button>
                                 <button className="trip__content__item__btn btn btn-danger">
                                Add to favorite 
                             </button>
                            </React.Fragment>
                        :"you must login"}
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            :"loading..."}
         
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
    user:state.user.loggedUser
})
export default connect(mapStateToProps)(Trip)
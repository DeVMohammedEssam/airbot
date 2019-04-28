import React, { Component } from 'react'
import axios from "axios"
import {connect} from 'react-redux'
 class Trip extends Component {
    constructor(props){
        super(props)
        this.state={
            type:0,
            trip:{
                arrival_AirportA:{},
                leaving_AirportA:{},
                companyA:{},
                planeA:{}

            }
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps)
    if(nextProps.user)
   if(nextProps.user!==prevState.user){
     return { type: nextProps.user.type};
  }
  else return null;
}
    componentDidMount=()=>{
        const id=this.props.match.params.id
        console.log("ID ",id)
        axios.get("https://823fd3bd.ngrok.io/api/trip/"+id).then((response)=>{
            this.setState({trip:response.data.trip});
        })
    }
    edit=()=>{
         const id=this.props.match.params.id
                     this.props.history.push("/edit-trip-form/"+id)

    }
    delete=()=>{
         const id=this.props.match.params.id
        axios.delete("https://823fd3bd.ngrok.io/api/user/reservation/"+id).then((response)=>{
            this.props.history.push("/dashboard")
        })
    }
    reserve=()=>{
           const id=this.props.match.params.id
   axios.post("https://823fd3bd.ngrok.io/api/user/reservation/"+id).then((response)=>{
            this.props.history.push("/")
        })
    }
    addToFav=()=>{
            const id=this.props.match.params.id
   axios.post("https://823fd3bd.ngrok.io/api/user/fav-list/"+id).then((response)=>{
            this.props.history.push("/")
        })
    }
  render() {
      let trip= this.state.trip;

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
                                {this.state.type?
                                   <React.Fragment>
                                  <button onClick={this.edit} className="trip__content__item__btn btn btn-success">
                                 Edit
                             </button>
                                 <button onClick={this.delete} className="trip__content__item__btn btn btn-danger">
                                Delete 
                             </button>
                             </React.Fragment>:
<React.Fragment>
      <button className="trip__content__item__btn btn btn-primary"  type="button" class="btn btn-primary" data-toggle="modal" data-target="#reserve">
                                 Reserve it
                             </button>
                                 <button onClick={this.addToFav} className="trip__content__item__btn btn btn-danger">
                                Add to favorite 
                             </button>
</React.Fragment>
                                }
                              
                            </React.Fragment>
                        :"you must login"}
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            :"loading..."}
         
        </div>


        <div class="modal fade" id="reserve" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-body">
        <div class="form-group">

    <input type="text" class="form-control" id="seat_number" aria-describedby="emailHelp" placeholder="seat number" />
    <small id="emailHelp" class="form-text text-muted">we'll check this seat and reservation within short time</small>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={this.reserve} type="button" class="btn btn-primary">Reserve Now</button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
    user:state.user.loggedUser
})
export default connect(mapStateToProps)(Trip)
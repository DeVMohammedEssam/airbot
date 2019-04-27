export default (trips,from,to,search)=>{
    console.log("search" ,search)
   if(search&&from==""&&to==""){
      return  trips.filter((trip)=>trip.arrival_AirportA.state.includes(search)||trip.leaving_AirportA.state.includes(search))

   }else{
        if(!from&&!to){
        return trips
    }
    else if(!from&&to){
        return trips.filter((trip)=>trip.arrival_AirportA.state.includes(to))

    }
     else if(from&&!to){
       return trips.filter((trip)=>trip.leaving_AirportA.state.includes(from))

    }
    else{
      return  trips.filter((trip)=>trip.arrival_AirportA.state.includes(to)&&trip.leaving_AirportA.state.includes(from))
    }
   }
}
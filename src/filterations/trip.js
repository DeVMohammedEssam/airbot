export default (trips,from,to,search)=>{
    console.log("search" ,search)
   if(search&&from==""&&to==""){
       console.log("INSIDE")
      return  trips.filter((trip)=>(trip.arrival_AirportA.city.includes(search)||trip.leaving_AirportA.city.includes(search)))

   }else{
        if(!from&&!to){
        return trips
    }
    else if(!from&&to){
        return trips.filter((trip)=>trip.arrival_AirportA.city.includes(to))

    }
     else if(from&&!to){
       return trips.filter((trip)=>trip.leaving_AirportA.city.includes(from))

    }
    else{
      return  trips.filter((trip)=>trip.arrival_AirportA.city.includes(to)&&trip.leaving_AirportA.city.includes(from))
    }
   }
}
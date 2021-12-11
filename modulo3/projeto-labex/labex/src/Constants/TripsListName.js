import { useRequestData } from "../Hooks/useRequestData";

const SelectTripsNames =()=>{
    const allTrips = useRequestData()

    const tripsListNames = allTrips.map((trip, index) => {
        return <option key={index} value={trip.id}>{trip.name} </option>
      })
return tripsListNames
}

export default SelectTripsNames;
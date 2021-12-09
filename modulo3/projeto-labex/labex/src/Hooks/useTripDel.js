import axios from "axios";
import { useEffect } from "react";

export function useTripDel(id){

    const token = localStorage.getItem('token')

    useEffect(() => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/christopher-silva-carver/trips/${id}`, {
          headers: {
            auth:token
          }
        })
          .then((res) => {
           console.log("ok",res.data)
          })
          .catch((err) => {
            console.log("erre",err.data)
          })
      
})
return 
}
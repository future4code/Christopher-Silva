import axios from 'axios';
import { BASE_URL } from '../constants/Url'



export const recipesList = () => {
    const token = localStorage.getItem('token')
    const header={
        token
    }
    console.log("header",header)
    axios.get(`${BASE_URL}/recipe/feed`, 
    {header}
    )
        .then((res) => {
            console.log('res',res.data)
             
            
        })
        .catch((err) => {
            console.log("erro do get",err.response)
        })
}
export default recipesList
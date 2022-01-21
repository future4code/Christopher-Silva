import { Button } from "@material-ui/core"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



const LogIn = ()=>{
    const navigate= useNavigate()
    const token=localStorage.getItem("token")
    const [bottonLogIn,setButtonLogIn]= useState(token ? "Logout":"Login")
    const goToLogin=()=>{
    navigate("/LoginPage")
  }
if (token){
    return<Link to="/LoginPage"><Button onClick={() => goToLogin} color="inherit">Login</Button></Link>
}else{
    return<Link to="/LoginPage"><Button onClick={() => goToLogin} color="inherit">Login</Button></Link>
}
}
export default LogIn
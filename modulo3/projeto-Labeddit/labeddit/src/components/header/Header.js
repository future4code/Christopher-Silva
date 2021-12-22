import { AppBar, Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import StyledTollbar from './StyledToolBar';
import { Link, useNavigate } from "react-router-dom";
import LogIn from "../LogIn"
import { useState } from "react";


const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [bottonLogIn, setButtonLogIn] = useState(token ? "Logout" : "Login")

  const LogOut = () => {
    localStorage.removeItem("token")
  }

  const loginAction = () => {
    console.log("logout")
    if (token) {
      console.log("logout")
      LogOut()
      setButtonLogIn("Login")
      navigate("/LoginPage")
    } else {
      navigate("/LoginPage")
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledTollbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={loginAction} color="inherit">{bottonLogIn}</Button>

        </StyledTollbar>
      </AppBar>
    </Box>
  );
}

export default Header
import {  AppBar, Box, Button, IconButton, Typography } from '@material-ui/core';
import * as React from 'react';
import StyledTollbar from './Styled';


 const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledTollbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </StyledTollbar>
      </AppBar>
    </Box>
    );
}

export default Header
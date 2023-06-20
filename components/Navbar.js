import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css';

function Navbar() {
  return (
    <AppBar style={{backgroundColor: "#87CEEB"}} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CantusIQ
        </Typography>
        <Button color="inherit" href="/solutions">
          Solutions
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" variant="contained" sx={{marginRight: '10px', borderRadius: '50px', backgroundColor: '#FF7518'}}>
          Request Demo
        </Button>
        <Button color="inherit" variant="outlined" sx={{borderRadius:'50px'}}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

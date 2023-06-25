import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import styles from '../styles/Home.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Solutions" component="a" href="/solutions">
          <ListItemText primary="Solutions" />
        </ListItem>
        <ListItem button key="About" component="a" href="/about">
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Request Demo">
          <Button color="inherit" variant="contained" sx={{width: '100%', borderRadius: '50px', backgroundColor: '#FF7518'}}>
            Request Demo
          </Button>
        </ListItem>
        <ListItem button key="Sign Up">
          <Button color="inherit" variant="outlined" sx={{width: '100%', borderRadius: '50px'}}>
            Sign Up
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar sx={{width: '100%', backgroundColor:'white', border:'2px solid black', margin:'8px 0', color: 'black'}} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2, display: { xs: 'block', sm: 'none' }}}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          CantusIQ
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          The Highest Voice
        </Typography>
        </Typography>
       
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

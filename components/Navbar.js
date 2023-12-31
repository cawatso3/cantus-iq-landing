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
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';


function Navbar() {
  const router = useRouter();
 // Function to navigate to the home page
const navigateToHomePage = () => {
 

  // Use router to push the user to the home page
  router.push('/');
};


  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="section2" smooth={true} duration={500}>
          <ListItem button key="Solutions" component="a" >
            <ListItemText primary="Solutions" />
          </ListItem>
        </Link>
        <Link to="section3" smooth={true} duration={500}>
          <ListItem button key="About" component="a">
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {/* <ListItem button key="Request Demo">
          <Button variant="contained" sx={{
            width: '100%', borderRadius: '50px', backgroundColor: '#FF7518',
            '&:hover': {
              backgroundColor: '#4B0082',
              border: 'none',

            },
          }}>
            Request Demo
          </Button>
        </ListItem>
        <ListItem button key="Sign Up">
          <Button color="inherit" variant="outlined" sx={{ width: '100%', borderRadius: '50px' }}>
            Sign Up
          </Button>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <AppBar sx={{ width: '100%', backgroundColor: 'white', border: '2px solid black', marginTop: '8px', color: 'black' }} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Typography onClick={navigateToHomePage} variant="h5" component="div" sx={{ flexGrow: 1 }}>
          CantusIQ
          <Typography component="div" sx={{ flexGrow: 1, fontSize: '12px', color: '#4B0082' }}>
            The Highest Voice
          </Typography>
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="section2" smooth={true} duration={500}>
            <Button color="inherit" >
              Solutions
            </Button>
          </Link>
          <Link to="section3" smooth={true} duration={500}>
            <Button color="inherit" >
              About
            </Button>
          </Link>
          {/* <Button variant="contained" sx={{
            marginRight: '10px', borderRadius: '50px', backgroundColor: '#FF7518',
            '&:hover': {
              backgroundColor: '#4B0082',
              border: 'none',

            }
          }}>
            Request Demo
          </Button> */}
          {/* <Button color="inherit" variant="outlined" sx={{
            borderRadius: '50px',
            '&:hover': {
              backgroundColor: '#4B0082',
              border: 'none',
              color: 'white'

            }
          }}>
            Sign Up
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

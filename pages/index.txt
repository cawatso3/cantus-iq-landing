import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar.js';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // This makes it take up the full height of the viewport
          textAlign: 'center',
          backgroundColor: '#FFF',
          color: '#4B0082',
          padding: 4,
        }}
      >
        <Typography variant="h2" component="h1">
          Welcome to Cantusiq
        </Typography>
        <Typography variant="h5" component="h2">
          Your one stop solution for all your music needs
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>
    </div>
  );
}

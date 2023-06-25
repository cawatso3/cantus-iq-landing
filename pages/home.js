import React from 'react';
import { Card, CardActionArea, CardMedia, Container, CssBaseline, Grid} from '@mui/material';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import {Insights, Brand, Deal, Commerce, Athletes, Influencers, Artists} from '../components/LandingPage/Cards';
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import Footer from '../components/LandingPage/Footer';





const LandingPage = () => {
  return (
<>
   <CssBaseline />
    <Container sx={{ width:'100%'}} maxWidth={'100%'}  className={`${styles.fullWidthContainer} MuiContainer-fixed`} disableGutters >
    <Grid container  spacing={2}>
      <Navbar />
      {/* Row 1 */}
      <Grid item xs={12} md={12} lg={12} className={styles.section} sx={{textAlign: 'center'}}>
        <h3 className={styles.sectionTitle}>
          The #1 CRM Platform For Industry <span>Creators</span>
        </h3>
       
       <h4>Powered by AI & Data, CantusIQ offers a comprehensive set of tools to manage, automate, and grow your business.</h4>
        {/* Add your content here */}
        
        <Grid item xs={6}  sx={{marginTop: '80px', margin: 'auto', width:'50%',  display: 'block', justifyContent: 'center' }}  >
          <Button sx={{borderRadius: '50px', marginTop:'10px', marginRight:'10px', backgroundColor:'#FF7518', color:'white', border:'1px solid #FF7518', 
          '&:hover': {
      backgroundColor: '#4B0082',
      border: 'none',
    },}} variant="contained">Request a Demo</Button>
          <Button sx={{borderRadius: '50px', marginTop:'10px', border:'1px solid #FF7518', color:'#FF7518',  '&:hover': {
      borderColor: '#4B0082',
    },}} variant="outlined">Get Started</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}  className={styles.section}>
        {/* Second column */}
        
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} className={`${styles.blueSection} ${styles.centeredSection} ${styles.sectionBackground}`}>
        <p style={{color:'white', fontSize: '40px'}}> Products</p>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} className={`${styles.productColumn} ${styles.sectionBackground}`} >
        
        <Insights xs={12} sm={6} lg={3} />
        
        
        {/* Add your content here */}
      </Grid>
      <Grid item xs={12} sm={6} lg={3}  className={styles.productColumn}>
        
        <Brand xs={12} sm={6} lg={3}/>
        
        {/* Add your content here */}
      </Grid>
      <Grid item xs={12} sm={6} lg={3}  className={styles.productColumn}>
       
        <Deal xs={12} sm={6} lg={3} />
        
        {/* Add your content here */}
      </Grid>
      <Grid item xs={12} sm={6} lg={3}  className={styles.productColumn}>
        
        <Commerce xs={12} sm={6} lg={3}/>
        
        {/* Add your content here */}
      </Grid>
      
      {/* Row 3 */}
      <Grid item xs={12} className={`${styles.blueSection} ${styles.centeredSection} ${styles.sectionBackground}`}>
        <p style={{color:'white', fontSize: '40px'}}> Industries</p>
      </Grid>
    
      <Grid item xs={12} sm={4} sx={{backgroundColor: '#000041', marginBottom:'16px', paddingBottom:'16px'}}>
        <Athletes />
      </Grid>
      
      <Grid item xs={12} sm={4} sx={{backgroundColor: '#000041', marginBottom:'16px', paddingBottom:'16px'}}>
        <Influencers  />
      </Grid>

      <Grid item xs={12} sm={4}sx={{backgroundColor: '#000041', marginBottom:'16px', paddingBottom:'16px'}}>
        <Artists />
      </Grid>
     

      {/* Row 4 */}
      <Grid item xs={12} sx={{textAlign:'center'}}>
        <p style={{fontWeight:'bold', fontSize:'30px'}}>
          Discover exciting opportunities that will take you over the edge, craft captivating campaigns that resonate with your audience, and unlock the true joy of creating. With CantusIQ, we're not just another platform; we're your partner on this thrilling adventure.
        </p>
        <Grid item xs={6}  sx={{marginTop: '80px', margin: 'auto', width:'50%',  display: 'block', justifyContent: 'center' }}  >
        <Button sx={{borderRadius: '50px', marginTop:'10px', marginRight:'10px', backgroundColor:'#FF7518', color:'white', border:'1px solid #FF7518', 
          '&:hover': {
      backgroundColor: '#4B0082',
      border: 'none',
    },}} variant="contained">Request a Demo</Button>
          <Button sx={{borderRadius: '50px', marginTop:'10px', border:'1px solid #FF7518', color:'#FF7518',  '&:hover': {
      borderColor: '#4B0082',
    },}} variant="outlined">Get Started</Button>
        </Grid>

      </Grid>
    </Grid>

    <Footer />
  </Container>

  </>
    
  
   
  );
};

export default LandingPage;

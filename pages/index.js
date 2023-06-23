import React from 'react';
import { Card, CardActionArea, CardMedia, Container, CssBaseline, Grid} from '@mui/material';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import {Insights, Brand, Deal, Commerce} from '../components/LandingPage/Cards';
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
          <Button sx={{borderRadius: '50px', marginTop:'10px', marginRight:'10px'}} variant="outlined">Request a Demo</Button>
          <Button sx={{borderRadius: '50px', marginTop:'10px'}} variant="outlined">Get Started</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}  className={styles.section}>
        {/* Second column */}
        
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} className={`${styles.blueSection} ${styles.centeredSection} ${styles.sectionBackground}`}>
        <h1 className={styles.sectionTitle}> Products</h1>
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
      <Grid item xs={12} sm={4} className={styles.section} sx={{textAlign: 'center'}}>
        <div style={{minHeight: '140px'}}>
        <h1 className={styles.sectionTitle}>Athletes</h1>
        <p>Empowering athletes in the digital era with a comprehensive platform to optimize operations & secure brand deals.</p>
        </div>
        <ul>
  <li>Automate Tasks</li>
  <li>Streamline Operations</li>
  <li>NCAA &amp; League Compliance</li>
  <li>Increase Fan Engagement</li>
  <li>Launch &amp; Merchandise</li>
</ul>
      </Grid>
      <Grid item xs={12} sm={4}  className={styles.section} sx={{textAlign: 'center'}}>
      <div style={{minHeight: '140px'}}>
        <h1 className={styles.sectionTitle}>Influencers</h1>
        <p>Scale with confidence by leveraging data and insights to amplify your influence and digital impact .</p>
      </div>
        <ul>
  <li>Negotiate Contracts</li>
  <li>Integrate Across Socials</li>
  <li>Community Management</li>
  <li>Discover Monetization Opportunities</li>
  <li>Across Marketing Themes &amp; Templates</li>
</ul>

      </Grid>
      <Grid item xs={12} sm={4} className={styles.section} sx={{textAlign: 'center'}}>
      <div style={{minHeight: '140px'}}>
        <h1 className={styles.sectionTitle}>Artists</h1>
        <p>Experience the power of a centralized platform designed to support independent musicians with all the essential tools needed to manage your career and support your craft.</p>
       </div>
       <ul>
  <li>Data-Driven Decision Making</li>
  <li>Identify Key Markets</li>
  <li>Effective Negotiation Tools</li>
  <li>Direct Music Sales</li>
  <li>Merchandise Management</li>
</ul>
      </Grid>

      {/* Row 4 */}
      <Grid item xs={12} className={styles.section} sx={{textAlign: 'center'}}>
        <p className={styles.sectionText}>
          Discover exciting opportunities that will take you over the edge, craft captivating campaigns that resonate with your audience, and unlock the true joy of creating. With CantusIQ, we're not just another platform; we're your partner on this thrilling adventure.
        </p>
        <Grid item xs={12} sx={{marginTop: '10px', textAlign: 'center'}} >
          <Button sx={{borderRadius: '50px', marginRight: '10px'}} variant="outlined">Request a Demo</Button>
          <Button sx={{borderRadius: '50px'}} variant="outlined">Get Started</Button>
        </Grid>

      </Grid>
    </Grid>

    <Footer />
  </Container>

  </>
    
  
   
  );
};

export default LandingPage;

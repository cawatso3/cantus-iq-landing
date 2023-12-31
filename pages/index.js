import React from 'react';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Insights, Brand, Deal, Commerce, Athletes, Influencers, Artists } from '../components/LandingPage/Cards';
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import Footer from '../components/LandingPage/Footer';
import { useEffect, useState } from 'react';
import ContactModal from '../components/ContactForm/ContactModal';







const LandingPage = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [text, setText] = useState('Creators');

  useEffect(() => {
    const animationTimer = setInterval(() => {
      if (text === 'Creators') {
        setText('Artists');
      } else if (text === 'Artists') {
        setText('Athletes');
      } else if (text === 'Athletes') {
        setText('Creators');
      }
    }, 2000); // Change the interval as per your preference (2000ms = 2 seconds)

    return () => {
      clearInterval(animationTimer);
    };
  }, [text]);

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/sing.png',
    '/hoop.png',
    '/livestream.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <>
      <CssBaseline />
      <Container sx={{ width: '100%' }} maxWidth={'100%'} className={`${styles.fullWidthContainer} MuiContainer-fixed`} disableGutters >
        <Grid container spacing={2}>
          <Navbar />
          {/* Row 1 */}

          <Grid id={'section1'} item xs={12} md={12} lg={12} className={`${styles.section} ${styles.carousel} `} sx={{ textAlign: 'center' }} style={{ backgroundImage: `url(${images[currentImage]})` }}>

            <p className={styles.sectionTitle} style={{ zIndex: 1 }}>
              The #1 CRM Platform For Industry {'  '} <span className={styles.highlightText} style={{ width: '80px', display: 'inline-block' }}>{text}</span>
            </p>

            <h2 style={{ color: 'white' }}>Powered by AI & Data, CantusIQ offers a comprehensive set of tools to manage, automate, and grow your business.</h2>
            {/* Add your content here */}

            <Grid item xs={6} sx={{ marginTop: '80px', margin: 'auto', width: '50%', display: 'block', justifyContent: 'center' }}  >
              <Button onClick={handleOpenModal} style={{ zIndex: 1 }} sx={{
                borderRadius: '50px', marginTop: '10px', marginRight: '10px', backgroundColor: '#FF7518', color: 'white', border: '1px solid #FF7518',
                '&:hover': {
                  backgroundColor: '#4B0082',
                  border: 'none',

                },
              }} variant="contained">Request a Demo</Button>

              <ContactModal open={openModal}  handleClose={handleCloseModal} />
              {/* <Button style={{ zIndex: 1 }} sx={{
                borderRadius: '50px', marginTop: '10px', border: '4px solid #FF7518', color: 'white',
                '&:hover': {
                  borderColor: '#4B0082',
                  backgroundColor: '#4B0082',
                  color: '#FF7518'


                },
              }} variant="outlined">Get Started</Button> */}

              <h3 style={{color:'white'}}>Currently serving U.S. customers only</h3>
            </Grid>
          </Grid>


          {/* <Grid item xs={12} md={6}  className={styles.section}>
        
        
      </Grid> */}



          {/* Row 2 */}
          <Grid id={'section2'} item xs={12} className={`${styles.blueSection} ${styles.centeredSection} ${styles.sectionBackground}`}>
            <p style={{ color: 'white', fontSize: '40px' }}> Products</p>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={`${styles.productColumn} ${styles.sectionBackground}`} >

            <Insights xs={12} sm={6} lg={3} />


            {/* Add your content here */}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={styles.productColumn}>

            <Brand xs={12} sm={6} lg={3} />

            {/* Add your content here */}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={styles.productColumn}>

            <Deal xs={12} sm={6} lg={3} />

            {/* Add your content here */}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className={styles.productColumn}>

            <Commerce xs={12} sm={6} lg={3} />

            {/* Add your content here */}
          </Grid>

          {/* Row 3 */}
          <Grid id={'section3'} item xs={12} className={`${styles.centeredSection}`} sx={{ backgroundColor: '#000041' }}>
            <p style={{ color: 'white', fontSize: '48px', textAlign: 'center' }}> Designed for <span className={styles.highlightText}>Creators</span> in any Industry</p>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ backgroundColor: '#000041' }}>
            <Athletes />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ backgroundColor: '#000041' }}>
            <Influencers />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ backgroundColor: '#000041' }}>
            <Artists />
          </Grid>


          {/* Row 4 */}
          {/* <Grid  direction={'column'} sx={{height: '100vh', display:'flex', alignItems:'center'}}> */}
          {/* <Grid flexDirection={'column'}  sx={{padding:'100px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
          <Grid id={'section4'} item sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid item xs={12} sx={{
              textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '35vh',
              '@media (max-width:600px)': {
                marginTop: '20vh'
              }
            }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', wordWrap: 'break-word' }} >
                Discover exciting opportunities that will take you over the edge, craft captivating campaigns that resonate with your audience, and unlock the true joy of creating. With CantusIQ, we're not just another platform; we're your partner on this thrilling adventure.
              </Typography>

            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '24px' }}  >
              <Button onClick={handleOpenModal} sx={{
                borderRadius: '50px', marginTop: '10px', marginRight: '10px', backgroundColor: '#FF7518', color: 'white', border: '4px solid #FF7518',
                '&:hover': {
                  backgroundColor: '#4B0082',
                  border: 'none',

                },
              }} variant="contained">Request a Demo</Button>
              {/* <Button sx={{
                borderRadius: '50px', marginTop: '10px', border: '4px solid #FF7518', color: '#FF7518', fontWeight: 'bold',
                '&:hover': {
                  borderColor: '#4B0082',
                  border: '4px solid #4B0082',
                  color: '#4B0082'
                },
              }} variant="outlined">Get Started</Button> */}
            </Grid>

          </Grid>
        </Grid>
        <Grid id={'section5'} item xs={12} sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'black', marginBottom: 'none' }}>
          {/* <ContactForm /> */}
        </Grid>


        <Footer />
      </Container>

    </>



  );
};

export default LandingPage;

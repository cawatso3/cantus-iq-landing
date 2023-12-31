import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Button from '@mui/material/Button';
import { withTheme } from "styled-components";
import styles from '../../styles/Home.module.css';
import { Link } from 'react-scroll';
// import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const handlePrivacyPolicyClick = () => {
    router.push('/privacy');
  };
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000041"
      }}
      position="static"
    >
      <Container maxWidth="100%">
        <Grid sx={{ marginTop: '0px' }} container spacing={5}>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <Box display="flex" flexDirection="column" sx={{ textAlign: 'center', color: 'white' }}>
              <Link to="section2" smooth={true} duration={500}>
                <Button className={styles.sectionFooter} color="inherit">
                  About
                </Button>
              </Link>

              <Link to="section2" smooth={true} duration={500}>
                <Button className={styles.sectionFooter} color="inherit">
                  Product
                </Button>
              </Link>
              <Link to="section3" smooth={true} duration={500}>
                <Button className={styles.sectionFooter} color="inherit">
                  Solutions
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <Box display="flex" flexDirection="column" sx={{ textAlign: 'center', color: 'white' }}>
              {/* <Link to="section4" smooth={true} duration={500}>
                <Button className={styles.sectionFooter}  >
                  Resources
                </Button>
              </Link> */}
              {/* <Button className={styles.sectionFooter}  >
                Terms & Conditions
              </Button> */}
              <Button onClick={handlePrivacyPolicyClick}>
                Privacy Policy
              </Button>
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box display="flex" sx={{ color: 'white' }}>
              <Link className={styles.sectionFooter} href="https://www.facebook.com/" >
                <Facebook />
              </Link>
              <Link
                className={styles.sectionFooter}
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link className={styles.sectionFooter} href="https://www.twitter.com/" >
                <Twitter />
              </Link>
            </Box>
          </Grid> */}
        </Grid>
        <Box mt={5}>
          <Typography style={{ paddingBottom: '16px', color: 'white' }} className={styles.sectionFooter} variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link className={styles.sectionFooter} href="https://www.1601lab.com/">
              1601Lab
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


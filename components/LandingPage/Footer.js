import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, ThemeProvider, createTheme} from "@mui/material";
import Button from '@mui/material/Button';
import { withTheme } from "styled-components";
import styles from '../../styles/Home.module.css';




export default function Footer() {
  return (

    <Box
      component="footer"
      sx={{
        backgroundColor: "#4E39C6"
    }}
    position="static"
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={10} sm={2}>
            <Button className={styles.sectionFooter} color="inherit" href="/about">
             About
            </Button>
            <Button className={styles.sectionFooter} color="inherit" href="/product">
             Product
            </Button>
            <Button className={styles.sectionFooter} color="inherit" href="/solutions">
             Solutions
            </Button>
            <Button className={styles.sectionFooter} color="inherit" href="/resouces">
             Resources
            </Button>
          </Grid>
          <Grid item xs={10} sm={4}>
          <Button className={styles.sectionFooter} color="inherit" href="/solutions">
             Terms & Conditions
            </Button>
            <Button className={styles.sectionFooter} color="inherit" href="/solutions">
             Privacy Policy
            </Button>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Link className={styles.sectionFooter} href="https://www.facebook.com/" color="inherit">
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
            <Link className={styles.sectionFooter}
            href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography className={styles.sectionFooter} variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link className={styles.sectionFooter} 
            color="inherit" href="https://www.1601lab.com/">
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
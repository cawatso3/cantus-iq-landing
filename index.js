import React from 'react';
import { Grid } from '@mui/material';
import styles from '../styles/Home.module.css';

const LandingPage = () => {
  return (
    <Grid container spacing={2}>
      {/* Row 1 */}
      <Grid item xs={6} className={styles.section}>
        <h3 className={styles.sectionTitle}>
          The #1 CRM Platform Built For
        </h3>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={6} className={styles.section}>
        {/* Second column */}
        <h1 className={styles.title}>Image</h1>
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} className={`${styles.section} ${styles.centeredSection}`}>
        <h1 className={styles.sectionTitle}>Products</h1>
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
        <h1 className={styles.productTitle}>Insights.IQ</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
        <h1 className={styles.productTitle}>Brand.IQ</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
        <h1 className={styles.productTitle}>Deal.IQ</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
        <h1 className={styles.productTitle}>Commerce.IQ</h1>
        {/* Add your content here */}
      </Grid>

      {/* Row 3 */}
      <Grid item xs={4} className={styles.section}>
        <h1 className={styles.sectionTitle}>Athletes</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <h1 className={styles.sectionTitle}>Influencers</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <h1 className={styles.sectionTitle}>Artists</h1>
        {/* Add your content here */}
      </Grid>

      {/* Row 4 */}
      <Grid item xs={12} className={styles.section}>
        <p className={styles.sectionText}>
          Discover exciting opportunities that will take you over the edge, craft captivating campaigns that resonate with your audience, and unlock the true joy of creating. With CantusIQ, we're not just another platform; we're your partner on this thrilling adventure.
        </p>
        {/* Add your content here */}
      </Grid>
    </Grid>
  );
};

export default LandingPage;

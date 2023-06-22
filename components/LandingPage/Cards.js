import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../../styles/Home.module.css';

export function Insights() {
  return (
    <Card xs={12} sm={6} lg={3} sx={{minHeight:'445px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/insights.png"
          alt="Insights.IQ"
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}} >
            Insights.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.secondary" component="p">
          Gain a competitive edge in your industry by unleashing the power of data with InsightsIQ; the ultimate analytics tool for creators, enabling informed decisions, optimized strategies, and exponential growth. 
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export  function Brand() {
  return (
    <Card xs={12} sm={6} lg={3} sx={{minHeight:'445px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/brand.png"
          alt="Brand.IQ"
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Brand.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.secondary">
          Craft compelling campaigns, seize new opportunities, and amplify your brand's growth potential with data-driven insights, empowering creators to maximize their brand's reach and increase collaboration opportunities.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export  function Deal() {
  return (
    <Card xs={12} sm={6} lg={3} sx={{minHeight:'445px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/deal.png"
          alt="Deal.IQ"
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Deal.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.secondary">
          Unlock deal-making excellence with DealIQ, the advanced contract management tool that simplifies negotiations, enhances collaboration, and maximizes the value of every business agreement.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Commerce() {
  return (
    <Card xs={12} sm={6} lg={3} sx={{minHeight:'445px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/commerce.png"
          alt="Commerce"
         
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Commerce.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.secondary">
          Revolutionize your online business with CommerceIQ, the all-in-one e-commerce solution designed to streamline operations, optimize sales performance, and deliver seamless customer experiences.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
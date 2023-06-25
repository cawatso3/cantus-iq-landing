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
          sx={{objectFit:'contain'}}
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}} >
            Insights.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary" component="p">
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
          sx={{objectFit:'contain'}}
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Brand.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary">
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
          sx={{objectFit:'contain'}}
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Deal.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary">
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
          sx={{objectFit:'contain'}}
         
        />
        <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Commerce.IQ
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary">
          Revolutionize your online business with CommerceIQ, the all-in-one e-commerce solution designed to streamline operations, optimize sales performance, and deliver seamless customer experiences.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Athletes() {
  return (
    <Card xs={12} sm={6} lg={3}>
       <CardContent>
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Athletes
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary" sx={{minHeight:'60px'}} >
          Empowering athletes in the digital era with a comprehensive platform to optimize operations & secure brand deals.
          </Typography>
        <div>
        <ul >
          <li>Automate Tasks</li>
          <li>Streamline Operations</li>
          <li>NCAA &amp; League Compliance</li>
          <li>Increase Fan Engagement</li>
          <li>Launch &amp; Merchandise</li>
        </ul>
        </div>
          
        </CardContent> 
    </Card>
   
  );
}

export function Influencers() {
  return (

    <Card xs={12} sm={6} lg={3} >
        <CardContent >
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Influencers
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary" sx={{minHeight:'60px'}}>
          Scale with confidence by leveraging data and insights to amplify your influence and digital impact.
          </Typography>
      <div>
      <ul>
        <li>Negotiate Contracts</li>
        <li>Integrate Across Socials</li>
        <li>Community Management</li>
        <li>Discover Monetization Opportunities</li>
        <li>Across Marketing Themes &amp; Templates</li>
      </ul>
      </div>

        </CardContent>
    </Card>
    
  );
}

export function Artists() {
  return (
    <Card xs={12} sm={6} lg={3}>
        <CardContent >
          <Typography className={styles.cardStyle} gutterBottom variant="h5" component="div" style={{color:"#4B0082"}}>
            Artists
          </Typography>
          <Typography className={styles.cardStyle} variant="body2" color="text.primary" sx={{minHeight:'60px'}}>
          Experience the power of a centralized platform designed to support independent musicians with all the essential tools needed to manage your career and support your craft.
          </Typography>

          <div>
          <ul>
            <li>Data-Driven Decision Making</li>
            <li>Identify Key Markets</li>
            <li>Effective Negotiation Tools</li>
            <li>Direct Music Sales</li>
            <li>Merchandise Management</li>
          </ul>
          </div>

        </CardContent>
        </Card>
     
  );
}
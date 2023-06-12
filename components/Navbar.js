import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cantus.IQ
        </Typography>
        <Button color="inherit" href="/solutions">
          Solutions
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit">Request a Demo</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

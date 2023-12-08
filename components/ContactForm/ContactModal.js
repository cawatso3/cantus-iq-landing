import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ContactModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare data to be sent
    // const formData = {
    //   name,
    //   email,
    //   comments
    // };
  
    // Send data to the server
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email sent successfully');
        // Reset form or additional success actions
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-form-modal"
      aria-describedby="contact-form"
    >
      <Box sx={style}>
        <Typography id="contact-form-modal" variant="h6" component="h2">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Message"
            name="comments"
            margin="normal"
            multiline
            rows={4}
            value={formData.comments}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} type="submit" variant="contained" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ContactModal;

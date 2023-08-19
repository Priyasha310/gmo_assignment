'use client'
import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  
  const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

  const validateMobile = (mobile: string) => {
      const mobileRegex = /^\d{10}$/;
      return mobileRegex.test(mobile);
  };

  const handleSubmit = () => {
    let hasErrors = false;

    if (name === '') {
      setNameError('Please enter your name');
      hasErrors = true;
    } else {
      setNameError('');
    }

    if (email === '') {
      setEmailError('Please enter your email');
      hasErrors = true;
    }else if(!validateEmail(email)){ 
      hasErrors = true;
      setEmailError('Please enter valid email');
    }else {
      setEmailError('');
    }

    if (phone === '') {
      setPhoneError('Please enter your phone number');
      hasErrors = true;
    }else if (!validateMobile(phone)) {
      hasErrors = true;
      setPhoneError('Please enter valid phone number');
    }else {
      setPhoneError('');
    }

    if (!hasErrors) {
      const formData = {
        name: name,
        email: email,
        phone: phone,
      };
      localStorage.setItem('formData', JSON.stringify(formData));
  
      window.location.href = '/home';
    }
  };


  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={4} direction='column'>

      <Typography variant="h4" align="center" gutterBottom>
        User Form
      </Typography>

        <TextField label='Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          error={!!nameError} 
          helperText={nameError} 
          required 
        />

        <TextField label='Email' type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          error={!!emailError} 
          helperText={emailError} 
          required 
        />

        <TextField label='Phone' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          error={!!phoneError} 
          helperText={phoneError} 
          required 
        />
        <Button variant='contained' disableElevation onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Alert from '@mui/material/Alert';
import FacebookIcon from '@mui/icons-material/Facebook';

const backgroundImage = 'https://picsum.photos/1920/1080';

export default function SigninForm({ onSubmit }) {
  const [form, setForm] = useState({ email: '', password: '', rememberMe: false });
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    severity: 'info', // 'error', 'warning', 'info', 'success'
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (alertInfo.show) {
      setAlertInfo({ ...alertInfo, show: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setAlertInfo({
        show: true,
        severity: 'error',
        message: 'email / password tidak valid!',
      });
      return;
    }
    
    if (onSubmit) {
      onSubmit(form);
      
      setAlertInfo({
        show: true,
        severity: 'success',
        message: form.email + ' berhasil masuk!',
      });
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      
      <Grid
        size={{ xs: 12, sm: 7, md: 8 }}
        sx={{
          display: { xs: 'none', sm: 'block' },
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Grid 
        size={{ xs: 12, sm: 5, md: 4 }}
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: '100%', sm: 'auto' },
        }}
      >
        <Box
          sx={{
            my: { xs: 4, sm: 8 }, 
            px: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%', 
            maxWidth: 400,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
            {alertInfo.show && (
              <Alert
                severity={alertInfo.severity}
                sx={{ 
                  mb: 2, 
                  width: '100%',
                }}
                onClose={() => setAlertInfo({ ...alertInfo, show: false })}
              >
                {alertInfo.message}
              </Alert>
            )}
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Alamat Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={form.email}
              onChange={handleChange}
              error={alertInfo.show && alertInfo.severity === 'error' && !form.email}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              error={alertInfo.show && alertInfo.severity === 'error' && !form.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: {xs: 2, sm: 3}, mb: 2, py: 1.2 }}
            >
              Log In
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
              <Box sx={{ flexGrow: 1, height: 1, borderBottom: '1px solid #666' }} />
              <Typography variant="body2" sx={{ mx: 2, color: '#666' }}>OR</Typography>
              <Box sx={{ flexGrow: 1, height: 1, borderBottom: '1px solid #666' }} />
            </Box>

            <Button
              fullWidth
              variant="text"
              startIcon={<FacebookIcon />}
              sx={{ 
                mb: 2, 
                py: 1.2,
                color: '#1877F2',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'transparent'
                },
                '&:active': {
                  backgroundColor: 'transparent'
                },
                '&:focus': {
                  backgroundColor: 'transparent'
                }
              }}
              onClick={() => {
                setAlertInfo({
                  show: true,
                  severity: 'info',
                  message: 'Fitur ini belum tersedia.',
                });
              }}
            >
              Log in with Facebook
            </Button>

            <Grid container spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Grid>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid sx={{ mx: 2, color: '#666', alignItems: 'center' }}>
                Don't have an account? 
                <Link href="#" variant="body2"> 
                  {"Sign up"}
                </Link>
              </Grid>
            </Grid>

            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: {xs: 3, sm: 5} }}>
              {'Copyright © '}
              <Link color="inherit" href="#">
                Ziegram 
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

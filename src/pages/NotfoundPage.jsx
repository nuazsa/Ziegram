import { Box, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HomeIcon from '@mui/icons-material/Home'

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 128px)',
        textAlign: 'center',
        p: { xs: 4, sm: 3 },
        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], // Latar belakang lembut
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 2,
          maxWidth: 'sm',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SentimentVeryDissatisfiedIcon
          sx={{
            fontSize: { xs: 60, sm: 80, md: 100 },
            color: 'warning.main',
            mb: 2
          }}
        />
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          gutterBottom
          sx={{
            mb: 1,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
          }}
        >
          Oops! Halaman Hilang.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            maxWidth: '450px',
            lineHeight: 1.7,
          }}
        >
          Sepertinya halaman yang Anda cari tersesat di belantara digital. Jangan khawatir, mari kembali ke jalan yang benar.
        </Typography>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          color="primary"
          component={Link}
          to="/signin"
          size="large"
          sx={{
            mt: 2,
            px: { xs: 3, sm: 5 },
            py: 1.5,
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Kembali ke Beranda
        </Button>
      </Paper>
    </Box>
  )
};

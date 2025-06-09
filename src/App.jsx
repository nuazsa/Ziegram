import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, useMediaQuery, CssBaseline } from '@mui/material';
import SigninPage from "./features/auth/pages/SigninPage";
import NotfoundPage from "./pages/NotfoundPage";

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, useMediaQuery, IconButton, Switch, AppBar, Toolbar, Typography, Skeleton } from '@mui/material';
import { Home, Settings, Dashboard, BarChart, AccountCircle, Mail, Notifications, Help, Info } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate 2-second loading delay
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Box>
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={400} />
            ) : (
              <Typography variant="h4">Welcome to the Dashboard!</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

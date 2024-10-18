import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
// import EventsPage from './pages/EventsPage';
import SpeakersPage from './pages/SpeakersPage';
import ProfilePage from './pages/ProfilePage';
import ReportsPage from './pages/ReportsPage';
import NotificationsPage from './pages/NotificationsPage';
import MessagesPage from './pages/MessagesPage';
import HelpPage from './pages/HelpPage';
import CalendarPage from './components/CalenderPage';
import MobileNav from './components/MobileNav';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Box sx={{ display: 'flex' }} className={` inter transition-all duration-300 ${darkMode ? 'dark:bg-[#383544] dark:text-white' : 'bg-white text-black'}`}>
      <CssBaseline />
      <Router>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="lg:hidden visible">
          <MobileNav darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {loading ? (
            <div className="p-3">
              <div className="bg-gray-300 dark:bg-gray-700 w-full h-screen animate-pulse"></div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<CalendarPage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/help" element={<HelpPage />} />
            </Routes>
          )}
        </Box>
      </Router>
    </Box>
  );
};

export default App;

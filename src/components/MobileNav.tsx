import React from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Switch,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Home,
  AccountCircle,
  CalendarMonth,
  Speaker,
  Book,
  Notifications,
  ChatBubble,
  Help,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../public/vite.svg';

interface MobileNavProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const tabs = [
  { name: 'Home', icon: <Home />, path: '/' },
  { name: 'Events', icon: <CalendarMonth />, path: '/events' },
  { name: 'Speakers', icon: <Speaker />, path: '/speakers' },
  { name: 'Profile', icon: <AccountCircle />, path: '/profile' },
  { name: 'Reports', icon: <Book />, path: '/reports' },
  { name: 'Notifications', icon: <Notifications />, path: '/notifications' },
  { name: 'Messages', icon: <ChatBubble />, path: '/messages' },
  { name: 'Help', icon: <Help />, path: '/help' },
];

const MobileNav: React.FC<MobileNavProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top AppBar with menu icon for mobile */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? '#484554' : '#fff',
          color: darkMode ? '#fff' : '#000',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: darkMode ? '#484554' : '#fff',
            color: darkMode ? '#fff' : '#000',
            padding: '10px',
          },
        }}
      >
        <Box sx={{ marginTop: '60px' }}>
          <List>
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem
                //   button
                  component={Link}
                  to={tab.path}
                  onClick={handleDrawerToggle} // Close drawer when clicking a link
                  sx={{
                    px: 2,
                  }}
                >
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.name} />
                </ListItem>
              </motion.div>
            ))}
          </List>
          <Box mt={2} px={2}>
            <div className="flex items-center justify-between">
              <p className="text-sm dark:text-gray-300">Dark Mode</p>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </div>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNav;

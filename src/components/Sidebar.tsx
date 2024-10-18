import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Switch,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  Home,
  AccountCircle,
  CalendarMonth,
  Speaker,
  Report,
  Book,
  Notifications,
  ChatBubble,
  Help,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../public/vite.svg';

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

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [value, setValue] = React.useState(0); // For mobile bottom navigation

  return (
    <>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: isOpen ? 240 : 72,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: isOpen ? 240 : 72,
              transition: 'width 0.3s',
              overflowX: 'hidden',
              backgroundColor: darkMode ? '#484554' : '#fff',
              color: darkMode ? '#fff' : '#000',
            },
          }}
        >
          <Box>
            <div className="poppins flex items-center justify-center gap-2 text-xl font-bold mb-2 mt-3">
              <img src={logo} alt="Logo" />
              {isOpen && 'Eventify'}
            </div>
          </Box>
          <List>
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem
                  // button
                  component={Link}
                  to={tab.path}
                  sx={{
                    justifyContent: isOpen ? 'initial' : 'center',
                    px: 2,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 3 : 'auto' }}>
                    {tab.icon}
                  </ListItemIcon>
                  {isOpen && <ListItemText primary={tab.name} />}
                </ListItem>
              </motion.div>
            ))}
            <Box>
              <div className="flex flex-col">
                <div onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <div className="flex cursor-pointer items-center ml-4 gap-6 my-3">
                      <KeyboardDoubleArrowLeft />
                      <p className="text-sm dark:text-gray-300">Collapse</p>
                    </div>
                  ) : (
                    <div className="flex cursor-pointer items-center ml-4 gap-6 my-3">
                      <KeyboardDoubleArrowRight />
                    </div>
                  )}
                </div>
                {isOpen && (
                  <div className="flex items-center gap-2">
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    <p className="text-sm dark:text-gray-300">Dark Mode</p>
                  </div>
                )}
              </div>
            </Box>
          </List>
        </Drawer>
      )}

      {/* Bottom Navigation for Mobile */}
      {isMobile && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: darkMode ? '#484554' : '#fff',
            zIndex: 1000,
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Events"
            icon={<CalendarMonth />}
            component={Link}
            to="/events"
          />
          <BottomNavigationAction
            label="Speakers"
            icon={<Speaker />}
            component={Link}
            to="/speakers"
          />
          <BottomNavigationAction
            label="Report"
            icon={<Report />}
            component={Link}
            to="/report"
          />
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircle />}
            component={Link}
            to="/profile"
          />
        </BottomNavigation>
      )}
    </>
  );
};

export default Sidebar;

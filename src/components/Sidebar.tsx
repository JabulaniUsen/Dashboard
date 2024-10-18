import React from 'react';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer, Switch } from '@mui/material';
import { Home, AccountCircle, Notifications, Help, Menu, CalendarMonth, Speaker, Book, ChatBubble } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  return (
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </IconButton>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Box>
      <List>
        {tabs.map((tab, index) => (
          <ListItem
            button
            key={tab.name}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            sx={{
              justifyContent: isOpen ? 'initial' : 'center',
              px: 2,
            }}
            component={Link}
            to={tab.path}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isOpen ? 3 : 'auto' }}>{tab.icon}</ListItemIcon>
            {isOpen && <ListItemText primary={tab.name} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

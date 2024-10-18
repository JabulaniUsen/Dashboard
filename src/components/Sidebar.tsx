import React, { useState } from 'react';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Home, AccountCircle, Notifications, Help, Menu, CalendarMonth, Speaker, Book, ChatBubble } from '@mui/icons-material';
import { motion } from 'framer-motion';

const tabs = [
  { name: 'Home', icon: <Home /> },
  { name: 'Events', icon: <CalendarMonth /> },
  { name: 'Speakers', icon: <Speaker /> },
  { name: 'Profile', icon: <AccountCircle /> },
  { name: 'Reports', icon: <Book /> },
  { name: 'Notifications', icon: <Notifications /> },
  { name: 'Messages', icon: <ChatBubble /> },
  { name: 'Help', icon: <Help /> },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </IconButton>
      </Box>
      <List>
        {tabs.map((tab, index) => (
          <ListItem
            key={tab.name}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            sx={{
              justifyContent: isOpen ? 'initial' : 'center',
              px: 2,
            }}
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

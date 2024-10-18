import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer, Switch, AppBar, Toolbar, } from '@mui/material';
import { Home, AccountCircle, CalendarMonth, Speaker, Book, Notifications, ChatBubble, Help, Menu as MenuIcon, } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const tabs = [
    { name: 'Home', icon: _jsx(Home, {}), path: '/' },
    { name: 'Events', icon: _jsx(CalendarMonth, {}), path: '/events' },
    { name: 'Speakers', icon: _jsx(Speaker, {}), path: '/speakers' },
    { name: 'Profile', icon: _jsx(AccountCircle, {}), path: '/profile' },
    { name: 'Reports', icon: _jsx(Book, {}), path: '/reports' },
    { name: 'Notifications', icon: _jsx(Notifications, {}), path: '/notifications' },
    { name: 'Messages', icon: _jsx(ChatBubble, {}), path: '/messages' },
    { name: 'Help', icon: _jsx(Help, {}), path: '/help' },
];
const MobileNav = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "fixed", sx: {
                    backgroundColor: darkMode ? '#484554' : '#fff',
                    color: darkMode ? '#fff' : '#000',
                }, children: _jsx(Toolbar, { children: _jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: handleDrawerToggle, children: _jsx(MenuIcon, {}) }) }) }), _jsx(Drawer, { anchor: "left", open: isOpen, onClose: handleDrawerToggle, sx: {
                    '& .MuiDrawer-paper': {
                        width: 240,
                        backgroundColor: darkMode ? '#484554' : '#fff',
                        color: darkMode ? '#fff' : '#000',
                        padding: '10px',
                    },
                }, children: _jsxs(Box, { sx: { marginTop: '60px' }, children: [_jsx(List, { children: tabs.map((tab, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(ListItem
                                //   button
                                , { 
                                    //   button
                                    component: Link, to: tab.path, onClick: handleDrawerToggle, sx: {
                                        px: 2,
                                    }, children: [_jsx(ListItemIcon, { children: tab.icon }), _jsx(ListItemText, { primary: tab.name })] }) }, tab.name))) }), _jsx(Box, { mt: 2, px: 2, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-sm dark:text-gray-300", children: "Dark Mode" }), _jsx(Switch, { checked: darkMode, onChange: () => setDarkMode(!darkMode) })] }) })] }) })] }));
};
export default MobileNav;

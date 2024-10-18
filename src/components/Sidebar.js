import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Drawer, Switch, BottomNavigation, BottomNavigationAction, } from '@mui/material';
import { Home, AccountCircle, CalendarMonth, Speaker, Report, Book, Notifications, ChatBubble, Help, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../public/vite.svg';
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
const Sidebar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [value, setValue] = React.useState(0); // For mobile bottom navigation
    return (_jsxs(_Fragment, { children: [!isMobile && (_jsxs(Drawer, { variant: "permanent", sx: {
                    width: isOpen ? 240 : 72,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: isOpen ? 240 : 72,
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                        backgroundColor: darkMode ? '#484554' : '#fff',
                        color: darkMode ? '#fff' : '#000',
                    },
                }, children: [_jsx(Box, { children: _jsxs("div", { className: "poppins flex items-center justify-center gap-2 text-xl font-bold mb-2 mt-3", children: [_jsx("img", { src: logo, alt: "Logo" }), isOpen && 'Eventify'] }) }), _jsxs(List, { children: [tabs.map((tab, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(ListItem
                                // button
                                , { 
                                    // button
                                    component: Link, to: tab.path, sx: {
                                        justifyContent: isOpen ? 'initial' : 'center',
                                        px: 2,
                                    }, children: [_jsx(ListItemIcon, { sx: { minWidth: 0, mr: isOpen ? 3 : 'auto' }, children: tab.icon }), isOpen && _jsx(ListItemText, { primary: tab.name })] }) }, tab.name))), _jsx(Box, { children: _jsxs("div", { className: "flex flex-col", children: [_jsx("div", { onClick: () => setIsOpen(!isOpen), children: isOpen ? (_jsxs("div", { className: "flex cursor-pointer items-center ml-4 gap-6 my-3", children: [_jsx(KeyboardDoubleArrowLeft, {}), _jsx("p", { className: "text-sm dark:text-gray-300", children: "Collapse" })] })) : (_jsx("div", { className: "flex cursor-pointer items-center ml-4 gap-6 my-3", children: _jsx(KeyboardDoubleArrowRight, {}) })) }), isOpen && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Switch, { checked: darkMode, onChange: () => setDarkMode(!darkMode) }), _jsx("p", { className: "text-sm dark:text-gray-300", children: "Dark Mode" })] }))] }) })] })] })), isMobile && (_jsxs(BottomNavigation, { showLabels: true, value: value, onChange: (event, newValue) => setValue(newValue), sx: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: darkMode ? '#484554' : '#fff',
                    zIndex: 1000,
                }, children: [_jsx(BottomNavigationAction, { label: "Home", icon: _jsx(Home, {}), component: Link, to: "/" }), _jsx(BottomNavigationAction, { label: "Events", icon: _jsx(CalendarMonth, {}), component: Link, to: "/events" }), _jsx(BottomNavigationAction, { label: "Speakers", icon: _jsx(Speaker, {}), component: Link, to: "/speakers" }), _jsx(BottomNavigationAction, { label: "Report", icon: _jsx(Report, {}), component: Link, to: "/report" }), _jsx(BottomNavigationAction, { label: "Profile", icon: _jsx(AccountCircle, {}), component: Link, to: "/profile" })] }))] }));
};
export default Sidebar;

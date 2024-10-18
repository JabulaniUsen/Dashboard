import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
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
const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);
    return (_jsxs(Box, { sx: { display: 'flex' }, className: ` inter transition-all duration-300 ${darkMode ? 'dark:bg-[#383544] dark:text-white' : 'bg-white text-black'}`, children: [_jsx(CssBaseline, {}), _jsxs(Router, { children: [_jsx(Sidebar, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsx("div", { className: "lg:hidden visible", children: _jsx(MobileNav, { darkMode: darkMode, setDarkMode: setDarkMode }) }), _jsx(Box, { component: "main", sx: { flexGrow: 1, p: 3 }, children: loading ? (_jsx("div", { className: "p-3", children: _jsx("div", { className: "bg-gray-300 dark:bg-gray-700 w-full h-screen animate-pulse" }) })) : (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/events", element: _jsx(CalendarPage, {}) }), _jsx(Route, { path: "/speakers", element: _jsx(SpeakersPage, {}) }), _jsx(Route, { path: "/profile", element: _jsx(ProfilePage, {}) }), _jsx(Route, { path: "/reports", element: _jsx(ReportsPage, {}) }), _jsx(Route, { path: "/notifications", element: _jsx(NotificationsPage, {}) }), _jsx(Route, { path: "/messages", element: _jsx(MessagesPage, {}) }), _jsx(Route, { path: "/help", element: _jsx(HelpPage, {}) })] })) })] })] }));
};
export default App;

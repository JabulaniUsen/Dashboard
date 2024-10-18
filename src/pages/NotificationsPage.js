import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { CheckCircleOutline, Notifications, Delete, ExpandMore, ExpandLess } from '@mui/icons-material';
const notificationsData = [
    { id: 1, message: "You have a new message from Admin", time: "2 hours ago", read: false },
    { id: 2, message: "Your subscription expires in 3 days", time: "1 day ago", read: false },
    { id: 3, message: "System maintenance scheduled for tomorrow", time: "5 hours ago", read: true },
    { id: 4, message: "Your account has been updated successfully", time: "3 days ago", read: true },
];
const NotificationsPage = () => {
    const [notifications, setNotifications] = useState(notificationsData);
    const [expandedNotification, setExpandedNotification] = useState(null);
    const toggleExpand = (id) => {
        setExpandedNotification((prev) => (prev === id ? null : id));
    };
    const markAsRead = (id) => {
        setNotifications((prevNotifications) => prevNotifications.map((notif) => notif.id === id ? { ...notif, read: true } : notif));
    };
    const deleteNotification = (id) => {
        setNotifications((prevNotifications) => prevNotifications.filter((notif) => notif.id !== id));
    };
    return (_jsxs("div", { className: "p-6 space-y-4 h-screen", children: [_jsx("h1", { className: "text-2xl font-semibold dark:text-white", children: "Notifications" }), _jsx("div", { className: "space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6", children: notifications.length > 0 ? (notifications.map((notification) => (_jsxs("div", { className: `border p-4 rounded-lg transition-transform duration-300 hover:shadow-md dark:bg-[#484554] dark:text-white dark:border-gray-700 ${notification.read ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`, children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: notification.message }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: notification.time })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [!notification.read && (_jsx("button", { onClick: () => markAsRead(notification.id), className: "text-blue-500 dark:text-blue-300 hover:text-blue-700", children: _jsx(CheckCircleOutline, {}) })), _jsx("button", { onClick: () => deleteNotification(notification.id), className: "text-red-500 hover:text-red-700", children: _jsx(Delete, {}) }), _jsx("button", { onClick: () => toggleExpand(notification.id), className: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200", children: expandedNotification === notification.id ? _jsx(ExpandLess, {}) : _jsx(ExpandMore, {}) })] })] }), expandedNotification === notification.id && (_jsx("div", { className: "mt-4", children: _jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "More detailes" }) }))] }, notification.id)))) : (_jsxs("div", { className: "text-center text-gray-500 dark:text-gray-400", children: [_jsx(Notifications, { className: "text-6xl mb-2" }), _jsx("p", { children: "No notifications available" })] })) })] }));
};
export default NotificationsPage;

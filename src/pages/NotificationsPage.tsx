import React, { useState } from 'react';
import { CheckCircleOutline, Notifications, Delete, ExpandMore, ExpandLess } from '@mui/icons-material';

const notificationsData = [
  { id: 1, message: "You have a new message from Admin", time: "2 hours ago", read: false },
  { id: 2, message: "Your subscription expires in 3 days", time: "1 day ago", read: false },
  { id: 3, message: "System maintenance scheduled for tomorrow", time: "5 hours ago", read: true },
  { id: 4, message: "Your account has been updated successfully", time: "3 days ago", read: true },
];

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [expandedNotification, setExpandedNotification] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedNotification((prev) => (prev === id ? null : id));
  };

  const markAsRead = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };

  return (
    <div className="p-6 space-y-4 h-screen">
      <h1 className="text-2xl font-semibold dark:text-white">Notifications</h1>
      <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`border p-4 rounded-lg transition-transform duration-300 hover:shadow-md dark:bg-[#484554] dark:text-white dark:border-gray-700 ${notification.read ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                </div>
                <div className="flex items-center space-x-3">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-blue-500 dark:text-blue-300 hover:text-blue-700"
                    >
                      <CheckCircleOutline />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Delete />
                  </button>
                  <button
                    onClick={() => toggleExpand(notification.id)}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    {expandedNotification === notification.id ? <ExpandLess /> : <ExpandMore />}
                  </button>
                </div>
              </div>

              {expandedNotification === notification.id && (
                <div className="mt-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    More detailes
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Notifications className="text-6xl mb-2" />
            <p>No notifications available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

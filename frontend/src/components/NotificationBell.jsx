// src/components/NotificationBell.jsx
import React, { useState, useEffect, useRef } from 'react';
import './NotificationBell.css';

const DEFAULT_NOTIFICATIONS = [
  {
    id: 1,
    type: 'tip',
    icon: '🤖',
    title: 'AI Daily Tip',
    message: 'Practice DSA for 30 mins today to boost your interview score!',
    time: 'Just now',
    read: false,
  },
  {
    id: 2,
    type: 'streak',
    icon: '🔥',
    title: 'Streak Reminder',
    message: "Don't break your streak! Complete one learning activity today.",
    time: '2 hrs ago',
    read: false,
  },
  {
    id: 3,
    type: 'job',
    icon: '💼',
    title: 'New Job Alert',
    message: 'Frontend Developer roles are trending in your target area.',
    time: '5 hrs ago',
    read: false,
  },
  {
    id: 4,
    type: 'badge',
    icon: '🏆',
    title: 'Badge Earned!',
    message: 'You earned the "Career Explorer" badge. Keep it up!',
    time: 'Yesterday',
    read: true,
  },
  {
    id: 5,
    type: 'tip',
    icon: '📈',
    title: 'Market Pulse',
    message: 'AI/ML skills are in high demand this week. Update your resume!',
    time: '2 days ago',
    read: true,
  },
];

const NotificationBell = () => {
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem('cc_notifications');
      return saved ? JSON.parse(saved) : DEFAULT_NOTIFICATIONS;
    } catch {
      return DEFAULT_NOTIFICATIONS;
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    localStorage.setItem('cc_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id, e) => {
    e.stopPropagation();
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="notif-wrapper" ref={dropdownRef}>
      <button
        className="notif-bell-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
      >
        <span className="bell-icon">🔔</span>
        {unreadCount > 0 && (
          <span className="notif-count-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notif-dropdown">
          <div className="notif-header">
            <h3>Notifications</h3>
            {unreadCount > 0 && (
              <button className="mark-all-btn" onClick={markAllRead}>
                Mark all read
              </button>
            )}
          </div>

          <div className="notif-list">
            {notifications.length === 0 ? (
              <div className="notif-empty">
                <span>🎉</span>
                <p>All caught up! No new notifications.</p>
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`notif-item ${!n.read ? 'unread' : ''} notif-${n.type}`}
                  onClick={() => markRead(n.id)}
                >
                  <div className="notif-icon">{n.icon}</div>
                  <div className="notif-body">
                    <div className="notif-title">{n.title}</div>
                    <div className="notif-msg">{n.message}</div>
                    <div className="notif-time">{n.time}</div>
                  </div>
                  {!n.read && <div className="unread-dot" />}
                  <button
                    className="notif-delete"
                    onClick={(e) => deleteNotification(n.id, e)}
                    aria-label="Dismiss"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="notif-footer">
            <span>CareerCraft Notifications</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;

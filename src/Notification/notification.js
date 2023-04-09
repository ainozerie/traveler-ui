import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div
      style={{
        display: show ? 'block' : 'none',
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '1rem',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <span style={{ marginRight: '1rem' }}>✔</span>
      <span>{message}</span>
    </div>
  );
};

export default Notification;

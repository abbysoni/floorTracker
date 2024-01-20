'use client'

// Timer.js

import React, { useState, useEffect } from 'react';


const Timer = ({ serviceTime, timerStarted }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  // console.log('Service Time from timer:', serviceTime);
  // console.log('Start Timer from timer:', startTimer);
  // console.log('timerStarted from timer:', timerStarted);

  useEffect(() => {
    let intervalId;

    if (timerStarted && serviceTime) {

      const initialRemainingTime = serviceTime * 60*1000;
      
      setRemainingTime(initialRemainingTime);

      intervalId = setInterval(() => {
        // Update remaining time every second
        setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 1000));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [serviceTime, timerStarted]);

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const timerExpiredStyle = {
    color: remainingTime === 0 ? 'red' : 'black',
  };

  return (
    <div>
      {/* Display the remaining time */}
      {remainingTime >= 0 ? (
        <p style={timerExpiredStyle}>{formatTime(remainingTime)}</p>
      ) : (
        <p style={{ color: 'red' }}>Timer Expired</p>
      )}
    </div>
  );
};

export default Timer;


'use client';

import React, { useState, useEffect } from 'react';

const Timer = ({ serviceTime, timerStarted, rowKey }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let intervalId;

    const storedStartTime = localStorage.getItem(`timerStartTime_${rowKey}`);
    const storedTimerStarted = localStorage.getItem(`timerStarted_${rowKey}`);

    if (storedStartTime && storedTimerStarted) {
      const elapsedTime = new Date().getTime() - Number(storedStartTime);
      const calculatedRemainingTime = serviceTime * 60 * 1000 - elapsedTime;
      setRemainingTime(Math.max(0, calculatedRemainingTime));

      if (storedTimerStarted === 'true') {
        // Resume the timer if it was started
        intervalId = setInterval(() => {
          setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 1000));
        }, 1000);
      }
    } else if (timerStarted && serviceTime) {
      // If no stored time, start a new timer
      const initialRemainingTime = serviceTime * 60 * 1000;
      setRemainingTime(initialRemainingTime);

      intervalId = setInterval(() => {
        setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 1000));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [serviceTime, timerStarted, rowKey]);

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
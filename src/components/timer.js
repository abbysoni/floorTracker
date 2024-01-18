'use client'

// Timer.js

import React, { useState, useEffect } from 'react';


const Timer = ({ serviceTime, startTimer, timerStarted }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  console.log('Service Time from timer:', serviceTime);
  console.log('Start Timer from timer:', startTimer);
  console.log('timerStarted from timer:', timerStarted);

  useEffect(() => {
    let intervalId;

    if (timerStarted && serviceTime) {

      const initialRemainingTime = serviceTime * 60 * 1000;
      
      setRemainingTime(initialRemainingTime);

      intervalId = setInterval(() => {
        // Update remaining time every second
        setRemainingTime((prevRemainingTime) => Math.max(0, prevRemainingTime - 1000));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [serviceTime, timerStarted]);

  return (
    <div>
      {/* Display the remaining time */}
      {remainingTime >= 0 ? (
        <p>{remainingTime}</p>
      ) : (
        <p>Timer Expired</p>
      )}
    </div>
  );
};

export default Timer;

'use client'

// Timer.js

import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    
    const timerInterval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(timerInterval);
  
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Live Running Timer:</h2>
      <p>{currentTime.format('YYYY-MM-DD HH:mm:ss')}</p>

      <div>
        <label htmlFor="inputBox">Enter Something:</label>
        <input
          type="text"
          id="inputBox"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Timer;

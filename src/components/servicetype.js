// ServiceTypeDropdown.js

import React from 'react';
import styles from '../app/page.module.css'
const serviceTypeOptions = [
    { label: 'None', time: 0 },
    { label: 'Clutch Work', time: 30 },
    { label: 'Gear Stuck', time: 45 },
    { label: 'Crown Noise', time: 60 },
  ];

const ServiceTypeDropdown = ({ value, onChange }) => {
  // Options for the dropdown with corresponding times

  return (
    <select
    className={styles.inputbox} 
      id="serviceType"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select Service Type
      </option>
      {serviceTypeOptions.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export { ServiceTypeDropdown, serviceTypeOptions };

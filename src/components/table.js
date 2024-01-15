// Table.js
'use client'

import React from 'react';
import styles from './table.module.css'

const Table = ({ data }) => {
  return (
    <table className={styles.customTable}>
      <thead>
        <tr>
          <th>Vehicle No.</th>
          <th>Model No.</th>
          <th>Date Of Sale</th>
          <th>Nature of Work</th>
          <th>Odo Reading</th>
          <th>Timer Status</th>
          <th>Timer</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.vehicleNo}</td>
            <td>{row.model}</td>
            <td>{row.dateOfSale}</td>
            <td>{row.serviceType}</td>
            <td>{row.serviceOdo}</td>
            {/* Additional columns for timer status and timer */}
            <td>{row.timerStatus}</td>
            <td>{row.timer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

// Table.js
'use client'

import React from 'react';
import Timer from './timer';
import styles from './table.module.css'

const Table = ({ data }) => {
  return (
    <table className={styles.customTable}>
      <thead>
        <tr>
          <th>Sr No.</th>
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
            <td>{index+1}</td>
            <td>{row.vehicleNo}</td>
            <td>{row.model}</td>
            <td>{row.dateOfSale}</td>
            <td>{row.serviceType}</td>
            <td>{row.currentOdo}</td>
            {/* Additional columns for timer status and timer */}
            <td>{row.timerStarted}</td>
            <td>{row.serviceTime}</td>
            {/* <Timer serviceTime={row.serviceTime} startTimer={row.timerStarted} timerStarted={row.timerStarted} /> */}
          </tr>
        ))}
        <tr>
          <td>
          {/* <Timer serviceTime={serviceTime} startTimer={timerStarted} timerStarted={timerStarted} /> */}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

// Table.js
// 'use client'

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
          <th>Time Alloted</th>
          <th>Timer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((row, index) => (
          <tr key={row.startTime}>
            <td>{index+1}</td>
            <td>{row.vehicleNo}</td>
            <td>{row.model}</td>
            <td>{row.dateOfSale}</td>
            <td>{row.serviceType}</td>
            <td>{row.currentOdo}</td>
            <td>{row.serviceTime} Mins</td>
            <td>
              <Timer
                serviceTime={row.serviceTime}
                timerStarted={row.timerStarted}
                rowKey={row.startTime}
              />
            </td>
            <td>none</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default Table;

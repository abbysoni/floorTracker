'use client'

import React, { useState } from 'react';
import styles from '../app/page.module.css'
import Table from './table';


const Inputdetail = () => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [model, setModel] = useState('');
  const [dateOfSale, setDateOfSale] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [serviceOdo, setServiceOdo] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

     // Add the entered data to the state
     const newData = {
      vehicleNo,
      model,
      dateOfSale,
      serviceType,
      serviceOdo,
      timerStatus: 'Not Started', // Placeholder for timer status
      timer: '00:00:00', // Placeholder for timer
    };

    setData([...data, newData]);

    // Handle form submission logic here
    console.log('Vehicle No:', vehicleNo);
    console.log('Model:', model);
    console.log('Date of Sale:', dateOfSale);
    console.log('Service Type:', serviceType);
    console.log('Current Odometer', serviceOdo)

    // Reset form fields
    setVehicleNo('');
    setModel('');
    setDateOfSale('');
    setServiceType('');
    setServiceOdo('');
  };

  return (
    
    <div>
       <h1
       style={{ paddingBottom:'30px'}}
       >Welcome to the Floor Tracker App</h1>
       <form onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <a 
        className={styles.card}>
          <h2>
            Vehicle No.
          </h2>
          <input
            type="text"
            id="vehicleNo"
            value={vehicleNo}
            onChange={(e) => setVehicleNo(e.target.value)}
            // placeholder='Enter Vehicle no. here'
          />
          <p>Enter Vehicle no. here</p>
        </a>

        <a
          // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Model No.
          </h2>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            // placeholder='Enter model no. '
          />
          <p>Enter model no.</p>
        </a>

        <a
          // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Date Of Sale
          </h2>
          <input
            type="date"
            id="dateOfSale"
            value={dateOfSale}
            onChange={(e) => setDateOfSale(e.target.value)}
          />
          <p>Enter DOS of vehicle</p>
        </a>

        <a
          // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Work Type
          </h2>
          <input
            type="text"
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          />
          <p>
            Describe work nature
          </p>
        </a>

        <a
          // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Odo reading
          </h2>
          <input
            type="text"
            id="serviceType"
            value={serviceOdo}
            onChange={(e) => setServiceOdo(e.target.value)}
          />
          <p>
            Enter current KM
          </p>
        </a>

        
        <button 
        className={styles.card } 
        style={{ padding:0,backgroundColor:'rgba(var(--card-rgb), 0.2)', fontSize:'20px', marginRight:'50px' }}
        type="submit"><span>Enter </span></button>

      </div>
      </form>

      {/* Display the table */}
      <Table data={data} />
    </div>
  );
};

export default Inputdetail;

// &gt; for arrow

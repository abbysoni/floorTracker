'use client'

import React, { useState } from 'react';
import styles from '../app/page.module.css'
import Table from './table';
import { ServiceTypeDropdown, serviceTypeOptions } from './servicetype';


const Inputdetail = () => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [model, setModel] = useState('');
  const [dateOfSale, setDateOfSale] = useState('');
  const [serviceType, setServiceType] = useState(null);
  const [currentOdo, setCurrentOdo] = useState('');
  const [data, setData] = useState([]);
  const [serviceTime, setServiceTime] = useState('');

  const [timerStarted, setTimerStarted] = useState(false);

  const handleStartTimer = () => {
    setTimerStarted(true);
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (vehicleNo && model && dateOfSale && serviceType && currentOdo) {
      
    // Add the entered data to the state
    const newData = {
      vehicleNo,
      model,
      dateOfSale,
      serviceType,
      currentOdo,
      timerStarted, 
      serviceTime, 
    };

    setData([...data, newData]);

    handleStartTimer();
  
    console.log('Vehicle No:', vehicleNo);
    console.log('Model:', model);
    console.log('Date of Sale:', dateOfSale);
    console.log('Service Type:', serviceType);
    console.log('Current Odometer', currentOdo)
    
    console.log('timerStarted', timerStarted) ;
    console.log('Service Time:', serviceTime);

    // Reset form fields
    setVehicleNo('');
    setModel('');
    setDateOfSale('');
    setServiceType('');
    setCurrentOdo('');
    setServiceTime('');
    setTimerStarted(false)
  } else {
    // Handle case where not all required fields are filled
    alert('Please fill in all required fields.');
  }

  };

  return (

    <div>

      <h1
        style={{ paddingBottom: '30px' }}
      >Welcome to the Floor Tracker App</h1>

      {/* Display the table */}
      <Table data={data} />

      <h1
        style={{ paddingBottom: '30px' }}
      ></h1>


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
            {/* Use the ServiceTypeDropdown component */}
            <ServiceTypeDropdown
              value={serviceType}
              onChange={(value) => {
                setServiceType(value);
                // Find the corresponding time and set it in the state
                const selectedOption = serviceTypeOptions.find((option) => option.label === value);
                setServiceTime(selectedOption ? selectedOption.time : 20);
              }}
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
              id="currentOdo"
              value={currentOdo}
              onChange={(e) => setCurrentOdo(e.target.value)}
            />
            <p>
              Enter current KM
            </p>
          </a>


          <button
            className={styles.card}
            style={{ padding: 0, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', marginRight: '50px' }}
            type="submit"
          >
            <span>Enter </span></button>

        </div>
      </form>



    </div>
  );
};

export default Inputdetail;

// &gt; for arrow


'use client'

import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css'
import Table from './table';
import { ServiceTypeDropdown, serviceTypeOptions } from './servicetype';
import { putData, putTimerData} from '../app/api/apiCall'

const Inputdetail = () => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [model, setModel] = useState('');
  const [dateOfSale, setDateOfSale] = useState('');
  const [serviceType, setServiceType] = useState(null);
  const [currentOdo, setCurrentOdo] = useState('');
  const [serviceAdv,setServiceAdv] = useState('');

  const [serviceTime, setServiceTime] = useState('');
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerData, setTimerData] = useState([]);

  const addDataToEdge = async (edData) => {
    const response = await putData(edData);
    if(edData){
      console.log("Data sent from input detail to edge",edData);
      console.log(response);
    setError(response);
    } else console.log('No response');
       };

      //  const addTimerDataToEdge = async (edData) => {
      //   const response = await putTimerData(edData);
      //   if(edData){
      //     console.log("Data sent from input detail to edge",edData);
      //     console.log(response);
      //   setError(response);
      //   } else console.log('No response');
        
      // };
    

  // Check if localStorage is available
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

  // Initialize data state using localStorage or an empty array
  const initialData = isLocalStorageAvailable ? JSON.parse(localStorage.getItem('floorTrackerData')) || [] : [];
  const [data, setData] = useState(initialData);



  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem('floorTrackerData', JSON.stringify(data));
    }
  }, [data, isLocalStorageAvailable]);


  const handleReset = () => {
    setData([]);
    setVehicleNo('');
    setModel('');
    setDateOfSale('');
    setServiceType(null);
    setCurrentOdo('');
    setServiceTime('');
    setTimerStarted(false);
    setServiceAdv('');

    data.forEach((row) => {
      localStorage.removeItem(`startTime_${row.rowkey}`)
      localStorage.removeItem(`timerStarted_${row.rowKey}`);
      localStorage.removeItem(`timerRemainingTime_${row.rowKey}`);
    });
  };

  // Function to generate a unique key
  const generateRowKey = () => {
    return new Date().getTime(); // Using timestamp as a unique key
  };

  const handleSubmit = (e) => {

    setTimerStarted(true);

    e.preventDefault();

    if (vehicleNo && model && dateOfSale && serviceType && currentOdo) {

      const newRowKey = generateRowKey();
      // Add the entered data to the state
      const newData = {
        vehicleNo,
        model,
        dateOfSale,
        serviceType,
        currentOdo,
        serviceTime,
        timerStarted: true,
        rowKey: newRowKey, // Unique key for the row
        startTime: newRowKey,  //rowkey is same as start time
        serviceAdv
      };

      // const newTimerData = {
      //   serviceTime,
      //   timerStarted: true,
      //   startTime: newRowKey,  //rowkey is same as start time
      //   remainingTime:serviceTime*60*1000,
      // };

      // setTimerData(newTimerData);

      setData([...data, newData]);
      addDataToEdge([...data, newData]);
      // addTimerDataToEdge(timerData);

      console.log('Vehicle No:', vehicleNo);
      console.log('Model:', model);
      console.log('Date of Sale:', dateOfSale);
      console.log('Service Type:', serviceType);
      console.log('Current Odometer', currentOdo)
      console.log('timerStarted', timerStarted);
      console.log('Service Time:', serviceTime);
      console.log('Start time', newRowKey)

      // Reset form fields
      setVehicleNo('');
      setModel('');
      setDateOfSale('');
      setServiceType('');
      setCurrentOdo('');
      setServiceTime('');
      setTimerStarted(false)
      setServiceAdv('');




      localStorage.setItem(`timerStartTime_${newRowKey}`, newRowKey);
      // Save initial timer state for the new row
      localStorage.setItem(`timerStarted_${newRowKey}`, 'true');
      localStorage.setItem(`timerRemainingTime_${newRowKey}`, String(serviceTime * 60 * 1000));

    }
    else {
      // Handle case where not all required fields are filled
      alert('Please fill in all required fields.');
    }

  };

  return (

    <div >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ paddingBottom: '30px' }}>Welcome to the Floor Tracker App</h1>
        <button onClick={handleReset} className={styles.resetButton}>Reset</button>
      </div>

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
              value={serviceType || ''}
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
          <a className={styles.card}>
            <h2>
              Service Advisor
            </h2>
            <input
             type="text"
              id="serviceAdv"
              value={serviceAdv}
             onChange={(e) => setServiceAdv(e.target.value)}
             />
             <p>
              Enter SA Name
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

      {/* <a href="./api" >
        <button
          className={styles.card}
          style={{ padding: 20, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', marginRight: '50px' }}
        >To API &gt;</button>
      </a>

      <Link href="./productlist">
        <button
          className={styles.card}
          style={{ padding: 20, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', marginRight: '50px' }}
        > To Product &gt;</button>
      </Link> */}



    </div>
  );
};

export default Inputdetail;

// &gt; for arrow
'use client'
import Counter from './counter'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import {getData, putData} from './apiCall';

export default function ApiCalls() {
  // console.log(process.env.EDGE_CONFIG)
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  // older code working with edge-config.vercel.com but not with api.vercel.com
  const showData = async () => {
    const response = await getData();
    console.log(response);
    setdata(response);
  };
  //   showData();
  // },[]);

  const addData = async () => {
    const response = await putData();
    console.log(response);
    setError(response);
  };

  return (
    <div>
      <Link href="/">Go To home tab</Link>

      {/* <Counter/> */}
      <button
        //   className={styles.card}
        style={{ padding: 20, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', margin: '50px' }}
        // onClick={()=> writeToEdgeConfig()}
        onClick={() => showData()}
      >showDATA &gt;</button>

      <div>
        <h1>GET DATA RESPONSE</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {data && (
          <div>
            <h2>Data received:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>

      <button
        //   className={styles.card}
        style={{ padding: 20, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', margin: '50px' }}
        // onClick={()=> writeToEdgeConfig()}
        onClick={() => addData()}
      >addDATA &gt;</button>

      <div>
        <h1>ADD DATA RESPONSE</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {data && (
          <div>
            <h2>Data received:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>



    </div>
  )
}

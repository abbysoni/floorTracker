'use client'
import Counter from './counter'
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';




export default function ApiCalls() {
  // console.log(process.env.EDGE_CONFIG)
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  // older code working with edge-config.vercel.com but not with api.vercel.com
  const showData = async () => {
    try {
      let response = await fetch('https://edge-config.vercel.com/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
            // Content-Type: 'application/json',
          },
        })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      // console.log(result);
      setdata(result.items)

    } catch (err) {
      setError(err.message)
    }
  };
  //   showData();
  // },[]);

  const addData = async () => {
    try {
      let response = await fetch('https://api.vercel.com/v1/edge-config/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn/items',
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${'eyUyJwDlIMAKkT4OWvqu0jWY'}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                      items: [
                        {
                          operation: 'create',
                          key: 'example_key_1',
                          value: 'example_value_1',
                        },
                      ],
                    }),
        })

      const result = await response.json();
      console.log(result);
      // console.log(result);
      setdata(result)

    } catch (err) {
      setError(err.message)
    }
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

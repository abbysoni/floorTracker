'use client'
import Counter from './counter'
import Link from 'next/link'
import { useState } from 'react';
import { GET } from './get-example/route';



  
export default function ApiCalls() {
  console.log(process.env.EDGE_CONFIG)
  const [data, setdata] = useState([]);

  const showData= async ()=>{

    // get data directly from api
    let Rdata = await fetch('https://edge-config.vercel.com/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?token=f3e0befb-6581-4020-8585-02b8ae03ca10',
      {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
                  // Content-Type: 'application/json',
                },
              })
      // {
      //   "headers": {
      //     "Authorization": "Bearer f3e0befb-6581-4020-8585-02b8ae03ca10"
      //   },
      //   "method": "get"
      // })
     let adata= Rdata.json()
    console.log(adata);
    console.log(Rdata.Object);

    
    // let Rdata = await GET();
    // Rdata = Rdata.json();
     setdata(Rdata.items);
  }

    return(
    <div>
        <Link href="/">Go To home tab</Link>
        
        {/* <Counter/> */}
        <button
        //   className={styles.card}
          style={{ padding: 20, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', marginRight: '50px' }}
          // onClick={()=> writeToEdgeConfig()}
           onClick={()=> showData()}
        >Check API Calls &gt;</button>
        {(data)?
        <div>{data}</div>:
        <div>None data found</div>}


        
    </div>
    )
}

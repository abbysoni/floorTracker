'use client'
import Counter from './counter'
import Link from 'next/link'
import { writeToEdgeConfig, fetchData } from './apiCall'

export default function ApiCalls() {
    return(
    <div>
        <Link href="/">Go To home tab</Link>
        
        {/* <Counter/> */}
        <button
        //   className={styles.card}
          style={{ padding: 20, backgroundColor: 'rgba(var(--card-rgb), 0.2)', fontSize: '20px', marginRight: '50px' }}
          onClick={()=> writeToEdgeConfig()}
        //   onClick={()=> fetchData()}
        >Check API Calls &gt;</button>

        
    </div>
    )
}

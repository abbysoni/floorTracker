
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';

import Inputdetail from '../components/inputdetail';
import Link from 'next/link';




export default function Home() {
  
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
        <p>
          Welcome Back ,
          <code className={styles.code}> Vishal</code>
        </p>
        <div className={styles.code}>
          <Link href="/api">
          
          By{' Abhilash '}
          </Link>
          {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> 
           </a> */}
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/tatalogo.svg"
          alt="Tata Logo"
          width={360}
          height={240}
          priority
        />
      </div>

      <div className={styles.desc}>
      {/* //options to input vehicle details */}
      <Inputdetail />
      </div>
    </main>
    
  )
};


import Image from 'next/image'
import styles from './page.module.css'

import React from 'react';

import Inputdetail from '../components/inputdetail';


export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
        <p>
          Welcome Back ,
          <code className={styles.code}> Vishal</code>
        </p>
        <div className={styles.code}>
          {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          By{' Abhilash '}
          {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */}
          {/* </a> */}
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

      {/* //options to input vehicle details */}
      <Inputdetail />
    </main>
  )
}

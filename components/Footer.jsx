import Image from 'next/legacy/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" objectFit="contain" alt=""/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road
            <br />New York, 85033
            <br />(602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road
            <br />New York, 85033
            <br />(602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road
            <br />New York, 85033
            <br />(602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road
            <br />New York, 85033
            <br />(602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br />9:00-22:00
          </p>
          <p className={styles.text}>
            SATURDAY-SUNDAY
            <br />12:00-24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
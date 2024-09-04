// components/Spinner.js
import React from 'react';
import styles from '@/styles/Spinner.module.scss'; // Make sure to create this CSS module

const Spinner = () => {
  return (
    <div style={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
    </div>
  );
};

export default Spinner;

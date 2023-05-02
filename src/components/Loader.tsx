import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader} role="status" aria-busy="true" aria-label="Loading">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;

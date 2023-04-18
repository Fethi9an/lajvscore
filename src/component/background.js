// BackgroundComponent.js

import React from 'react';
import styles from './background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.circle1}/>
      <div className={styles.circle2}/>
      <div className={styles.circle3}/>
      
    </div>
  );
};

export default Background;

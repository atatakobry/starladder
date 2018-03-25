import React from 'react';
import classNames from 'classnames';

import styles from './Loader.modules.css';

function Loader() {
  return (
    <div className={classNames(styles.component)}>
      <div className={classNames(styles.circle, styles.circle1)} />
      <div className={classNames(styles.circle, styles.circle2)} />
      <div className={classNames(styles.circle, styles.circle3)} />
      <div className={classNames(styles.circle, styles.circle4)} />
      <div className={classNames(styles.circle, styles.circle5)} />
      <div className={classNames(styles.circle, styles.circle6)} />
      <div className={classNames(styles.circle, styles.circle7)} />
      <div className={classNames(styles.circle, styles.circle8)} />
      <div className={classNames(styles.circle, styles.circle9)} />
      <div className={classNames(styles.circle, styles.circle10)} />
      <div className={classNames(styles.circle, styles.circle11)} />
      <div className={classNames(styles.circle, styles.circle12)} />
    </div>
  );
}

export default Loader;
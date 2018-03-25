import React from 'react';

import cat from './cat.gif';
import cloud from './cloud.png';
import styles from './NothingWasFound.modules.css';

function NothingWasFound() {
  return (
    <div className={styles.component}
         style={{
           backgroundImage: `url(${cloud})`
         }}
    >
      <img className={styles.sadCat}
           alt="T_T"
           src={cat}
       />
    </div>
  )
}

export default NothingWasFound;
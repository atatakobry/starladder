import React from 'react';

import GridTweet from './GridTweet';

import styles from './Grid.modules.css';

function Grid({ tweets }) {
  return (
    <div className={styles.component}>
      {
        tweets.map(tweet =>
          <GridTweet key={tweet.id}
                     tweet={tweet}
          />
        )
      }
    </div>
  );
}

export default Grid;
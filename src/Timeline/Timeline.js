import React from 'react';

import TimelineTweet from './TimelineTweet';

import styles from './Timeline.modules.css';

function Timeline({ tweets }) {
  return (
    <div className={styles.component}>
      {
        tweets.map(tweet =>
          <TimelineTweet key={tweet.id}
                         tweet={tweet}
          />
        )
      }
    </div>
  );
}

export default Timeline;
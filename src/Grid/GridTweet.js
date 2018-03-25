import React from 'react';

import placeholder from './twitter-placeholder-bg.png';

import styles from './GridTweet.modules.css';

function GridTweet({ tweet }) {
  const img = tweet.user.profile_banner_url || tweet.user.profile_background_image_url_https || placeholder;

  return (
    <div className={styles.component}
         style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <span className={styles.name}>
            {tweet.user.name}
          </span>

          <span className={styles.screenName}>
            {`@${tweet.user.screen_name}`}
          </span>
        </div>

        <div className={styles.text}>
          {tweet.text}
        </div>
      </div>
    </div>
  );
}

export default GridTweet;
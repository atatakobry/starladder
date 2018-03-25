import React from 'react';
import { distanceInWordsToNow } from 'date-fns';

import styles from './TimelineTweet.modules.css';

function TimelineTweet({ tweet }) {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className={styles.user}>
            <img className={styles.profileImage}
                 alt="avatar"
                 src={tweet.user.profile_image_url_https}
            />
            <span className={styles.nameWrapper}>
              <span className={styles.name}>
                {tweet.user.name}
              </span>
            </span>

            <span className={styles.screenName}>
              {`@${tweet.user.screen_name}`}
            </span>
          </span>

          <span className={styles.createdAt}>
            {distanceInWordsToNow(tweet.created_at)}
          </span>
        </div>

        <div className={styles.text}>
          {tweet.text}
        </div>
      </div>
    </div>
  );
}

export default TimelineTweet;
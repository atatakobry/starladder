import React from 'react';
import { Button } from 'reactstrap';

import styles from './Search.modules.css';

function Search({ query, isDisabled, onChange, onSubmit }) {
  return (
    <form
      className={styles.component}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="input-group">
        <input className="form-control"
               type="text"
               placeholder="Search on Twitter..."
               value={query || ''}
               onChange={onChange}
        />
        <div className="input-group-append">
          <Button className={styles.button}
                  type="submit"
                  color="primary"
                  disabled={isDisabled || !query.length}
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Search;

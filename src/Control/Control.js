import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { times } from 'lodash';

import styles from './Control.modules.css';

function Control({ tweets, tweetsPerPage, activePageNumber, onClick }) {
  const pagesCount = Math.ceil(tweets.length / tweetsPerPage);

  return (
    <Pagination className={styles.component}>
      {
        times(pagesCount).map(pageNumber => {
          return (
            <PaginationItem key={pageNumber}
                            active={pageNumber === activePageNumber}
            >
              <PaginationLink href="#"
                              onClick={e => {
                                e.preventDefault();
                                onClick(pageNumber);
                              }}
              >
                {pageNumber + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })
      }
    </Pagination>
  );
}

export default Control;
import React, { Component } from 'react';
import { isString, isEmpty, take, drop } from 'lodash';
import { Row, Col } from 'reactstrap';

import { twitterService } from './libs';

import Search from './Search';
import Loader from './Loader';
import Control from './Control';
import Timeline from './Timeline';
import Grid from './Grid';

import logo from './logo.svg';
import styles from './App.modules.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '#starladder',
      tweets: [],
      tweetsPerPage: 10,
      activePageNumber: 0,
      isLoading: false
    };

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.onSearch();
  }

  onSearch() {
    const { searchQuery } = this.state;

    if (!isString(searchQuery) || isEmpty(searchQuery)) {
      return;
    }

    this.setState({ isLoading: true });
    twitterService.search(searchQuery)
      .then(tweets => {
        this.setState({
          tweets,
          activePageNumber: 0
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { searchQuery, tweets, tweetsPerPage, activePageNumber, isLoading } = this.state;
    const displayedTweets = take(drop(tweets, activePageNumber * tweetsPerPage), tweetsPerPage);

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>

        <div className={styles.content}>
          <div className="container">
            <div className={styles.contentHeader}>
              <Search query={searchQuery}
                      isDisabled={isLoading}
                      onChange={e => { this.setState({ searchQuery: e.target.value }) }}
                      onSubmit={this.onSearch}
              />

              {
                isLoading &&
                  <div className={styles.loaderWrapper}>
                    <Loader />
                  </div>
              }
            </div>
          </div>

          {
            tweets && !!tweets.length &&
              <div className={styles.contentBody}>
                <Control tweets={tweets}
                         tweetsPerPage={tweetsPerPage}
                         activePageNumber={activePageNumber}
                         onClick={pageNumber => this.setState({ activePageNumber: pageNumber })}
                />

                <Row noGutters={true}>
                  <Col xs={6}>
                    <Timeline tweets={displayedTweets} />
                  </Col>

                  <Col xs={6}>
                    <Grid tweets={displayedTweets} />
                  </Col>
                </Row>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;

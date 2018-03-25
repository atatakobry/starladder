import React, { Component } from 'react';
import { isString, isEmpty } from 'lodash';
import { Row, Col } from 'reactstrap';

import { twitterService } from './libs';

import Search from './Search';
import Loader from './Loader';
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
        this.setState({ tweets });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { searchQuery, tweets, isLoading } = this.state;

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

            {
              tweets && !!tweets.length &&
                <Row noGutters={true}>
                  <Col xs={5}>
                    <Timeline tweets={tweets} />
                  </Col>

                  <Col xs={7}>
                    <Grid tweets={tweets} />
                  </Col>
                </Row>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

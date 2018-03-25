import axios from 'axios';

export default {
  search(searchQuery) {
    return axios
      .get('/api/tweets', {
        params: { q: searchQuery }
      })
      .then(response => response.data.statuses);
  }
};
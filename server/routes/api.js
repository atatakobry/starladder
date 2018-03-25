var express = require('express');
var router = express.Router()
var cache = require('memory-cache');

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: '10d42maOGxrizqMkVvgAFH7YW',
  consumer_secret: 'FWFCdVNPZ3Q5TyoQ2eNuNIMkdtjF6tIBnitt2ZOm4MWlOynGEz',
  access_token_key: '977629463390367745-xeUFeuVNg8fhrZFrjUX7VRwDghLnYEm',
  access_token_secret: 'dIAuWtxVqIuolvjDg8QAreDrgawEDgJbRMKVmhIO2uVYm'
});

router.get('/tweets', function(req, res, next) {
  var q = req.query && req.query.q;

  if (!q) {
    res.json({ statuses: [] });
  } else {
    var key = `tweets_${q}`;
    var cached = cache.get(key);

    if (cached) {
      res.json(cached);
    } else {
      client.get('search/tweets', { q: q }, function(error, data, response) {
        if (!error) {
          res.json(data);
          cache.put(key, data, 10 /* sec */ * 1000);
        } else {
          res.status(500).json({ error: error });
        }
      });
    }
  }
});

module.exports = router;

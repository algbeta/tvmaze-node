const request = require('request')
const config = require('./config')

request(config.tvmaze_api_url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
  console.log(body.explanation);
});

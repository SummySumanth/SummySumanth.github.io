const axios = require('axios');

const fetchBlogDetails = () => axios({
  method: 'get',
  url: `https://api.medium.com/v1/blogs/${blogId}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Charset': 'utf-8',
    authorization: `Bearer ${global.applicationSecrets.keysAndValues.mediumToken}`,
  },
});

module.exports = fetchBlogDetails;

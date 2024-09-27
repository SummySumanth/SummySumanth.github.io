const { parse } = require('rss-to-json');

const fetchBlogsList = () => parse('https://medium.com/feed/@sumanthbettadapura');

module.exports = { fetchBlogsList };

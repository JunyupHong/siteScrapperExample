const rq = require('request-promise');

// test하는 vue는 vue-router-test에 있음!

module.exports = {
  async getSiteContents(url) {
    const result = await rq(url);
    console.log(result);
    return result;
  }
};

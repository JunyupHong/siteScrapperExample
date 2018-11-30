var express = require('express');
var router = express.Router();
const a = require('../site-scrapper.js');


// test하는 vue는 vue-router-test에 있음!
/* GET home page. */
router.get('/:url', async (req, res, next) => {
  const b = await a.getSiteContents(decodeURIComponent(req.params.url));
  res.send(b);
});

module.exports = router;

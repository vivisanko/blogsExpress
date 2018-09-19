const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, _next) => {
  res.render('index', {
    title: 'Page not found',
    about: 'This page could not be found on the server',
    tagline: '404 Error!'
  });
});

module.exports = router;
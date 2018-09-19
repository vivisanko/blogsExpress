const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, _next) => {
  res.render('index', {
    title: 'Добро пожаловать!',
    about: 'Блог MyDevJS Майи Девовны Джаваскриптовской',
    tagline: 'Даже Боги читают блоги!'
  });
});

module.exports = router;
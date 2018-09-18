const express = require('express');

const router = express.Router();
const db = require('../db/dataDb.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('db',db);
  
  res.json(db.blogs);
});

module.exports = router;

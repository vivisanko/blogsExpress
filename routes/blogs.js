const express = require('express');

const router = express.Router();
const fs = require('fs');
const db = require('../db/dataDb.js');
const Helper = require('./helper');


/* GET home page. */


router.get('/', (_req, res, _next) => {

  res.json(db.blogs);
});

router.post('/', (req, res, _next) => {
  const blog = {
    id: Helper.makeId(db.blogs.length),
    title: req.body.title,
    text: req.body.text
  }

  db.blogs.push(blog);
  const output = JSON.stringify(db.blogs);
  fs.writeFileSync('./db/blogs.json', output);
  res.jsonp(blog);
});


router.get('/:blogId', (req, res, _next) => {

  const index = db.blogsId.indexOf(req.params.blogId);

  if (index === -1) {
    res.redirect('/notfound');
  }

  res.json(db.blogs[index]);
})


router.put('/:blogId', (req, res, _next) => {
  const index = db.blogsId.indexOf(req.params.blogId);

  if (index === -1) {

    res.json({
      error: "A blog with this id does not exist"
    });
  }
  Object.keys(req.body).forEach((key) => {
    if (key === "text" || key === "title") {
      db.blogs[index][key] = req.body[key]
    }
  })

  const output = JSON.stringify(db.blogs);
  fs.writeFileSync('./db/blogs.json', output);
  res.json(db.blogs[index]);
})

router.delete('/:blogId', (req, res, _next) => {
  const index = db.blogsId.indexOf(req.params.blogId);

  if (index === -1) {
    res.json({
      error: "A blog with this id does not exist"
    });
  }
  db.blogs.splice(index, 1);
  const output = JSON.stringify(db.blogs);
  fs.writeFileSync('./db/blogs.json', output);
  res.json({
    ok: `article with id ${req.params.blogId} removed from blog`
  });
})







module.exports = router;
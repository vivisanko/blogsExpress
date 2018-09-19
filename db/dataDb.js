const fs = require('fs');

class Articles {
  constructor(pathToBlogs) {
    this.blogs = JSON.parse(fs.readFileSync(pathToBlogs).toString());
    this.blogsId = this.blogs.map(it => it.id)
  };

}

const db = new Articles('./db/blogs.json');



module.exports = db;
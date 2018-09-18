const express = require('express');
const fs = require('fs');
const path = require('path');

class Articles {
    constructor(pathToBlogs) {
        this.blogs = JSON.parse(fs.readFileSync('./db/blogs.json').toString());
            // this.blogsId = this.blogs.map(it => it.id)
    };

}

const db = new Articles('./db/blogs.json');

// console.log(db);


module.exports = db;
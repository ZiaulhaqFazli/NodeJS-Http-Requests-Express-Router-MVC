const Blog = require('../models/blog');
//Mongoose module
const mongoose = require('mongoose');

//Blogs index controller
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs!', blogs: result })
        })
        .catch((error) => {
            console.log(error);
        });
}

//Get blog by id controller
const blog_details = (req, res) => {
    // const id = req.params.id.trim();
    const id = mongoose.Types.ObjectId(req.params.id.trim());
    // ObjectId(id);
    Blog.findById(id)
        .then((result) => {
            res.render('blog-details', { blog: result , title: 'Blog Details' });
        })
        .catch((error) => {
            console.log(error);
        });
}

//Create blog controller
const blog_create_get = (req, res) => {
    res.render('create-blog', { title: "Create Blog" });
}

//Add a new blog controller
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((error) => {
            console.log(error);
    }); 
}

//Delete blog by id
const blog_delete = (req, res) => {
    // const id = req.params.id.trim();
    const id = mongoose.Types.ObjectId(req.params.id.trim());
    // ObjectId(id);
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post, 
    blog_delete
}
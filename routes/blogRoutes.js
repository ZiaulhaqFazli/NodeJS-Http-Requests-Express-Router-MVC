const express = require('express');
const router = express.Router();

//Import Blog Controller
const blogController = require('../controllers/blogController');

//Get All Blogs
router.get('/', blogController.blog_index);

//Add a new blog
router.post('/', blogController.blog_create_post);

//Create new blog view
router.get('/create', blogController.blog_create_get);

//Get a blog by id
router.get('/:id', blogController.blog_details);

//Delete a blog by id
router.delete('/:id', blogController.blog_delete);

module.exports = router;
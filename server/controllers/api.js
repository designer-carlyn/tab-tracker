const Post = require('../models/post');
const fs = require('fs');

module.exports = class API {

    // Fetch All Post
    static async fetchAllPost(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Fetch Post by ID
    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Create Post
    static async createPost(req, res) {
        const post = req.body;
        const imageName = req.file.filename;
        post.image = imageName;

        try {
            await Post.create(post)
            res.status(200).json({ message: 'Created successfully'});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Update Post
    static async updatePost(req, res) {
        let id = req.params.id;
        let new_image = '';

        if (req.file) {
            new_image = req.file.filename;

            try {
                fs.unlinkSync('./uploads/'+req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }

        const newPost = req.body;
        newPost.image = new_image;

        try {
            await Post.findByIdAndUpdate(id, newPost)
            res.status(200).json({ message: 'Update successfully'});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Delete Post
    static async deletePost(req, res) {
        const id = req.params.id;

        try {
            const post = await Post.findByIdAndDelete(id)

            if (post.image != '') {
                try {
                    fs.unlinkSync('./uploads/'+post.image);
                } catch (err) {
                    console.log(err);
                }
                res.status(200).json({ message: 'Delete successfully'});
            }
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
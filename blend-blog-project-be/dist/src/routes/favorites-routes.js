"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const Favorite = require('../models/favorites-model.js');
const favorites_model_1 = require("../models/favorites-model");
const blogposts_model_1 = require("../models/blogposts-model");
const router = express_1.default.Router();
const Favorite = new favorites_model_1.Favorites();
const BlogPost = new blogposts_model_1.BlogPosts();
router.get('/', (req, res) => {
    Favorite.find()
        .then((resources) => {
        res.json(resources);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get Favorites' });
    });
});
router.get('/:user_id', (req, res) => {
    const userId = parseInt(req.params.user_id, 10);
    Favorite.findByUser(userId)
        .then((resources) => {
        // Need code here to make get requests for the users favorite posts.
        // Favorite.findBlogs()
        res.json(resources);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get Favorites', err });
    });
});
router.post('/', (req, res) => {
    Favorite.findByUserAndBlogPost(req.body.user_id, req.body.blogpost_id)
        .first()
        .then((post) => {
        if (post) {
            // This post is already in this users favorites.
            res.status(409).json({ message: `Blog with with id ${post.blogpostId} is already in this users favorites.` });
        }
        else {
            Favorite.add(req.body)
                .then((response) => {
                // tslint:disable-next-line:no-console
                console.log("response is ", response);
                res.status(201).json(response);
            }).catch((err) => {
                res.status(500).json({ message: "failed to add new favorite." });
            });
        }
    }).catch((err) => {
        res.status(500).json({ message: "failed to add new favorite." });
    });
});
router.delete('/:user_id/:blogpost_id', (req, res) => {
    const userId = parseInt(req.params.user_id, 10);
    const blogpostId = parseInt(req.params.blogpost_id, 10);
    Favorite.findByUserAndBlogPost(userId, blogpostId)
        .first()
        .then((favorite) => {
        Favorite.delete(favorite.id)
            .then(() => {
            res.status(201).json();
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
});
module.exports = router;
//# sourceMappingURL=favorites-routes.js.map
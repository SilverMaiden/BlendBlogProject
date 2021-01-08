"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogposts_model_1 = require("../models/blogposts-model");
const router = express_1.default.Router();
const BlogPost = new blogposts_model_1.BlogPosts();
router.get('/', (req, res) => {
    BlogPost.find()
        .then((blogposts) => {
        res.header("access-control-allow-origin", "*");
        res.json(blogposts);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get BlogPost' });
    });
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    BlogPost.find(id)
        .then((tasks) => {
        res.json(tasks);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get BlogPost' });
    });
});
router.post('/', (req, res) => {
    BlogPost.add(req.body)
        .then((response) => {
        res.status(201).json(response);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
});
module.exports = router;
//# sourceMappingURL=blogposts-routes.js.map
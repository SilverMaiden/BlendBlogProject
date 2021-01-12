"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogposts_model_1 = require("../models/blogposts-model");
const BlogPost = new blogposts_model_1.BlogPosts();
const router = express_1.default.Router();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
// SEARCH FILTER ROUTER
router.get('/search/:searchterm', (req, res) => {
    // tslint:disable-next-line:no-console
    const searchTerm = req.params.searchterm;
    BlogPost.find()
        .then((blogposts) => {
        if (blogposts !== undefined) {
            const filteredData = blogposts.filter((post) => {
                // tslint:disable-next-line:no-console
                console.log(searchTerm);
                return (post.blogpost_title.toLowerCase().includes(searchTerm)
                    || post.blogpost_content.toLowerCase().includes(searchTerm));
            });
            // tslint:disable-next-line:no-console
            console.log(filteredData, blogposts);
            res.header("access-control-allow-origin", "*");
            res.json(filteredData);
        }
        else {
            res.header("access-control-allow-origin", "*");
            res.json(blogposts);
        }
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get filtered BlogPost' });
    });
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    BlogPost.find(id)
        .first()
        .then((response) => {
        res.json(response);
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
router.post('/:id', (req, res) => {
    BlogPost.add(req.body)
        .then((blogpost) => {
        res.status(201).json(blogpost);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
});
router.put('/:id', (req, res) => {
    BlogPost.edit(req.body)
        .then((blogpost) => {
        res.status(201).json(blogpost);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
});
router.delete('/:id', (req, res) => {
    // tslint:disable-next-line:no-console
    const id = parseInt(req.params.id, 10);
    BlogPost.deleteFavorite(id)
        .then(() => {
        BlogPost.delete(id)
            .then(() => {
            res.status(201).json();
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }).
        catch((err) => {
        res.status(500).json({ message: err.message });
    });
});
module.exports = router;
//# sourceMappingURL=blogposts-routes.js.map
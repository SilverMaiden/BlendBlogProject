const express = require('express');
const BlogPosts = require('./blogposts-model.js');
const router = express.Router();
router.get('/', (req, res) => {
    BlogPosts.find()
        .then(blogposts => {
        res.header("access-control-allow-origin", "*");
        res.json(blogposts);
    })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get BlogPosts' });
    });
});
router.get('/:id', (req, res) => {
    BlogPosts.find(req.params.id)
        .then(tasks => {
        res.json(tasks);
    })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get BlogPosts' });
    });
});
router.post('/', (req, res) => {
    BlogPosts.add(req.body)
        .then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(500).json({ message: error.message });
    });
});
module.exports = router;
//# sourceMappingURL=blogposts-routes.js.map
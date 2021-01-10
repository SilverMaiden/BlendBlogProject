"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_model_1 = require("../models/users-model");
const User = new users_model_1.Users();
// import  * as Users  from "../models/users-model.js";
const router = express_1.default.Router();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/', (req, res) => {
    User.find()
        .then((users) => {
        res.header("access-control-allow-origin", "*");
        res.json(users);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get users' });
    });
});
router.get('/:id', (req, res) => {
    const param = parseInt(req.params.id, 10);
    User.find(param)
        .then((users) => {
        res.json(users);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get project' });
    });
});
router.get('/:id/favorites', (req, res) => {
    User.findFavorites(req.params.id)
        .then((favorites) => {
        res.json(favorites);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get favorites' });
    });
});
router.get('/:id/myposts', (req, res) => {
    User.findBlogPosts(req.params.id)
        .then((blogposts) => {
        res.json(blogposts);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get blogposts' });
    });
});
module.exports = router;
//# sourceMappingURL=users-routes.js.map
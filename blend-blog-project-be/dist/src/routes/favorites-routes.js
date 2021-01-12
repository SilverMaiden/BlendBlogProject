"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const Favorite = require('../models/favorites-model.js');
const favorites_model_1 = require("../models/favorites-model");
const router = express_1.default.Router();
const Favorite = new favorites_model_1.Favorites();
router.get('/', (req, res) => {
    Favorite.find()
        .then((resources) => {
        res.json(resources);
    })
        .catch((err) => {
        res.status(500).json({ message: 'Failed to get Favorite' });
    });
});
router.post('/', (req, res) => {
    // tslint:disable-next-line:no-console
    console.log(req.body.userId, req.body.blogpostId);
    Favorite.findByUser(req.body.userId, req.body.blogpostId)
        .first()
        .then((post) => {
        if (post) {
            // tslint:disable-next-line:no-console
            console.log("post is already in favorites/relation already exists");
            // This post is already in this users favorites.
            res.status(409).json({ message: `Blog with with id ${post.blogpostId} is already in this users favorites.` });
        }
        else {
            const data = { user_id: req.body.userId, blogpost_id: req.body.blogpostId };
            // tslint:disable-next-line:no-console
            console.log("post is not already in favorites/no relation already exists: ", data);
            Favorite.add(data)
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
router.delete('/:id', (req, res) => {
    // tslint:disable-next-line:no-console
    const id = parseInt(req.params.id, 10);
    Favorite.delete(id)
        .then(() => {
        res.status(201).json();
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
});
module.exports = router;
//# sourceMappingURL=favorites-routes.js.map
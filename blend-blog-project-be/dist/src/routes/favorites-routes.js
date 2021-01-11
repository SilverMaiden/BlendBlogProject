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
    Favorite.findByUser(req.body.userId, req.body.blogpostId)
        .first()
        .then((post) => {
        if (post) {
            // This post is already in this users favorites.
            res.status(409).json({ message: `Blog with with id ${post.blogpostId} is already in this users favorites.` });
        }
        else {
            Favorite.add(req.body)
                .then((response) => {
                res.status(201).json(response);
            }).catch((err) => {
                res.status(500).json({ message: "failed to add new user." });
            });
        }
    });
    Favorite.add(req.body)
        .then((response) => {
        res.status(201).json(response);
    }).catch((error) => {
        res.status(500).json({ message: error.message });
    });
});
module.exports = router;
//# sourceMappingURL=favorites-routes.js.map
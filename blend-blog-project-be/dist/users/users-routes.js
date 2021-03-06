"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const Users = require('./users-model.js');
const users_model_js_1 = __importDefault(require("./users-model.js"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/', (req, res) => {
    users_model_js_1.default.find()
        .then(users => {
        res.header("access-control-allow-origin", "*");
        res.json(users);
    })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get users' });
    });
});
router.get('/:id', (req, res) => {
    users_model_js_1.default.find(req.params.id)
        .then(users => {
        res.json(users);
    })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get project' });
    });
});
router.get('/:id/favorites', (req, res) => {
    users_model_js_1.default.findFavorites(req.params.id)
        .then(favorites => {
        res.json(favorites);
    })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get favorites' });
    });
});
router.post('/', (req, res) => {
    users_model_js_1.default.add(req.body)
        .then(users => {
        res.status(201).json(users);
    }).catch(error => {
        res.status(500).json({ message: "failed to add new user." });
    });
});
exports.default = router;
//# sourceMappingURL=users-routes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_model_1 = require("../models/register-model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const Register = new register_model_1.RegisterUser();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// WHAT NEEDS TO HAPPEn
/* I need to use this router for register. Let's make a function
in router-model.ts that does everything we need.*/
router.post('/', (req, res) => {
    Register.addUser(req.body)
        .then((users) => {
        res.status(201).json(users);
    }).catch((err) => {
        res.status(500).json({ message: "failed to add new user." });
    });
});
module.exports = router;
//# sourceMappingURL=register-routes.js.map
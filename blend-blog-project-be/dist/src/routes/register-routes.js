"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_model_1 = require("../models/register-model");
const bcrypt_1 = __importDefault(require("bcrypt")); // --More info on bcrypt library here: https://www.npmjs.com/package/bcrypt
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const Register = new register_model_1.RegisterUser();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// WHAT NEEDS TO HAPPEN
/* I need to use this router for register. Let's make a function
in router-model.ts that does everything we need.*/
router.post('/', (req, res) => {
    // TODO - Passwords are not currently being hashed, and are therefore extremely insecure.
    // Add bcrypt to hash password before adding it to DB
    const newUser = req.body;
    // Checks should be happening on the front end too through form validation,
    // but also need to occur on the backend before being entered into the DB.
    if (!newUser.name || !newUser.email || !newUser.password) {
        res.status(400).json({ message: 'Request is missing required values.' });
    }
    // Using bcrypt to hash users password
    const passwordHash = bcrypt_1.default.hashSync(newUser.password, 10);
    newUser.password = passwordHash;
    // Not currently checking for duplicate email
    Register.findBy({ email: newUser.email })
        .first()
        .then(user => {
        if (user) {
            // There is an account registerd with this email already
            res.status(409).json({ message: `User with email ${user.email} already exists` });
        }
        else {
            Register.addUser(newUser)
                .then((users) => {
                res.status(201).json(users);
            }).catch((err) => {
                res.status(500).json({ message: "failed to add new user." });
            });
        }
    }).catch(err => {
        res.status(500).json({ err });
    });
});
module.exports = router;
//# sourceMappingURL=register-routes.js.map
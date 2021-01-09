"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_model_1 = require("../models/login-model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../config/secrets");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const LogIn = new login_model_1.LogIns();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// WHAT NEEDS TO HAPPEn
/* I need to use this router for login. Let's make a findby email function
in login-model.ts that does everything we need.*/
router.post('/', (req, res) => {
    const { email, password } = req.body;
    LogIn.findBy({ email })
        .first()
        .then(user => {
        // const user = response;
        // tslint:disable-next-line:no-console
        // console.log(response === false)
        if (user !== undefined) {
            // tslint:disable-next-line:no-console
            console.log("hi im", user);
            if (password === user.password) /*&& bcrypt.compareSync(password, user.password))*/ {
                const token = signToken(user);
                process.env.JW_TOKEN = token;
                // tslint:disable-next-line:no-console
                console.log("hi im", process.env.JW_TOKEN);
                res.status(200).json({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token
                });
            }
            else {
                res.status(401).json({ message: "Incorrect password." });
            }
        }
        else {
            res.status(401).json({ message: "No user exists with this email." });
        }
    })
        .catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.status(500).json(err);
    });
});
// Function to sign token
function signToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    };
    const options = {
        expiresIn: '1d'
    };
    return jsonwebtoken_1.default.sign(payload, secrets_1.jwtSecret, options);
}
module.exports = router;
//# sourceMappingURL=login_routes.js.map
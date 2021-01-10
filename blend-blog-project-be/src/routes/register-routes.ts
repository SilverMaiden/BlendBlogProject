import express, {Request, Response} from 'express';
import { RegisterUser } from '../models/register-model';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const Register = new RegisterUser();
router.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// WHAT NEEDS TO HAPPEn

/* I need to use this router for register. Let's make a function
in router-model.ts that does everything we need.*/

router.post('/', (req: Request, res: Response) => {
    Register.addUser(req.body)
    .then((users: any) => {
        res.status(201).json(users);
    }).catch((err: any) => {
        res.status(500).json({message: "failed to add new user."})
    })
})

module.exports = router;


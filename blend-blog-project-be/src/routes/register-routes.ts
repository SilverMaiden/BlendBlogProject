import express, {Request, Response} from 'express';
import { RegisterUser } from '../models/register-model';
import bcrypt from 'bcrypt'; // --More info on bcrypt library here: https://www.npmjs.com/package/bcrypt
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const Register = new RegisterUser();
router.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// WHAT NEEDS TO HAPPEN

/* I need to use this router for register. Let's make a function
in router-model.ts that does everything we need.*/

router.post('/', (req: Request, res: Response) => {
    // TODO - Passwords are not currently being hashed, and are therefore extremely insecure.
    // Add bcrypt to hash password before adding it to DB

    const newUser = req.body;
    // Checks should be happening on the front end too through form validation,
    // but also need to occur on the backend before being entered into the DB.
    if (!newUser.name || !newUser.email || !newUser.password) {
        res.status(400).json({ message: 'Request is missing required values.' });
      }
    
      // Using bcrypt to hash users password
    const passwordHash = bcrypt.hashSync(newUser.password, 10);
    newUser.password = passwordHash;

    // Not currently checking for duplicate email

    Register.findBy({email: newUser.email})
    .first()
    .then(user => {
      if (user) {
        // There is an account registerd with this email already 
        res.status(409).json({ message: `User with email ${user.email} already exists` });
      } else {
            Register.addUser(newUser)
            .then((users: any) => {
                res.status(201).json(users);
            }).catch((err: any) => {
                res.status(500).json({message: "failed to add new user."})
            })
        }
    }).catch(err => {
        res.status(500).json({ err });
    });
});

module.exports = router;


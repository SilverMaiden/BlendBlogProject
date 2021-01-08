
import express, {Request, Response} from 'express';
import { LogIns } from '../models/login-model';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/secrets';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const LogIn = new LogIns();
router.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// WHAT NEEDS TO HAPPEn

/* I need to use this router for login. Let's make a findby email function
in login-model.ts that does everything we need.*/


router.post('/', (req: Request, res: Response) => {
    const { email, password } = req.body;
    LogIn.findBy({ email })
    .first()
    .then(user => {
      if (user) {
           // tslint:disable-next-line:no-console
           console.log("hi im", user)
           if (password === user.password)/*&& bcrypt.compareSync(password, user.password))*/ {
        const token = signToken(user);

        process.env.JW_TOKEN = token;
        // tslint:disable-next-line:no-console
        console.log("hi im", process.env.JW_TOKEN)
        res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid login' });
      }
    } else {
        res.status(401).json({message: 'Invalid email'})
    }})
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err);
      res.status(500).json(err);
    });
});



// Function to sign token
function signToken(user: any) {
  const payload = {
    id: user.id,
    email: user.email
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, jwtSecret, options);
}





module.exports = router;

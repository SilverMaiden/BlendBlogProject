
import express, { Request, Response} from 'express';

import { Users } from '../models/users-model';

const User = new Users();
// import  * as Users  from "../models/users-model.js";

const router = express.Router();

router.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', (req: Request, res: Response) => {
  User.find()
  .then((users: any) => {
      res.header("access-control-allow-origin", "*");
      res.json(users);
    })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.get('/:id', (req: Request, res: Response) => {
  const param: number = parseInt(req.params.id, 10)
  User.find(param)
  .then((users: any) => {
    res.json(users);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});

router.get('/:id/favorites', (req: Request, res: Response) => {
  User.findFavorites(req.params.id)
  .then((favorites: any) => {
    res.json(favorites);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get favorites' });
  });
});

router.get('/:id/myposts', (req: Request, res: Response) => {
  User.findBlogPosts(req.params.id)
  .then((blogposts: any) => {
    res.json(blogposts);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get blogposts' });
  });
});


router.post('/', (req: Request, res: Response) => {
    User.add(req.body)
    .then((users: any) => {
        res.status(201).json(users);
    }).catch((err: any) => {
        res.status(500).json({message: "failed to add new user."})
    })
})

module.exports = router;

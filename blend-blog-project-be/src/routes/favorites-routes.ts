
import express, {Request, Response} from 'express';
// const Favorite = require('../models/favorites-model.js');
import { Favorites } from '../models/favorites-model';
const router = express.Router();
const Favorite = new Favorites();


router.get('/', (req: Request, res: Response) => {
  Favorite.find()
  .then((resources: any) => {
    res.json(resources);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get Favorite' });
  });
});

router.post('/', (req: Request, res: Response) => {
    Favorite.findByUser(req.body.userId, req.body.blogpostId)
    .first()
    .then((post) => {
      if (post) {
        // This post is already in this users favorites.
        res.status(409).json({ message: `Blog with with id ${post.blogpostId} is already in this users favorites.` });
      } else {
        Favorite.add(req.body)
        .then((response: any) => {
            res.status(201).json(response);
        }).catch((err: any) => {
            res.status(500).json({message: "failed to add new user."})
        })
      }



    })
    Favorite.add(req.body)
    .then((response: any) => {
        res.status(201).json(response);
    }).catch((error: any) => {
        res.status(500).json({message: error.message})
    })
})

module.exports = router;

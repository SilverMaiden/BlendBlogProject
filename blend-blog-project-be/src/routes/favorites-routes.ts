
import express, {Request, Response} from 'express';
import { request } from 'http';
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
    // tslint:disable-next-line:no-console
    console.log(req.body.userId, req.body.blogpostId)


    Favorite.findByUser(req.body.userId, req.body.blogpostId)
    .first()
    .then((post) => {
      if (post) {
        // tslint:disable-next-line:no-console
        console.log("post is already in favorites/relation already exists")

        // This post is already in this users favorites.
        res.status(409).json({ message: `Blog with with id ${post.blogpostId} is already in this users favorites.` });
      } else {

        const data = {user_id: req.body.userId, blogpost_id: req.body.blogpostId}
        // tslint:disable-next-line:no-console
        console.log("post is not already in favorites/no relation already exists: ", data)
        Favorite.add(data)
        .then((response: any) => {
            // tslint:disable-next-line:no-console
            console.log("response is ", response)
            res.status(201).json(response);
        }).catch((err: any) => {
            res.status(500).json({message: "failed to add new favorite."})
        })
      }
    }).catch((err: any) => {
      res.status(500).json({message: "failed to add new favorite."})
  })
})

router.delete('/:id', (req: Request, res: Response) => {
  // tslint:disable-next-line:no-console
  const id = parseInt(req.params.id, 10)
  Favorite.delete(id)
  .then(() => {
    res.status(201).json();
  }).catch((err: any) => {
      res.status(500).json({message: err.message})
  })
})

module.exports = router;

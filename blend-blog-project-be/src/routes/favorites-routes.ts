
import express, {Request, Response} from 'express';
import { request } from 'http';
// const Favorite = require('../models/favorites-model.js');
import { Favorites } from '../models/favorites-model';
import { BlogPosts } from '../models/blogposts-model';
const router = express.Router();
const Favorite = new Favorites();
const BlogPost = new BlogPosts();

router.get('/', (req: Request, res: Response) => {
  Favorite.find()
  .then((resources: any) => {
    res.json(resources);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get Favorites' });
  });
});

router.get('/:user_id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.user_id, 10)
  Favorite.findByUser(userId)
  .then((resources: any) => {
    // Need code here to make get requests for the users favorite posts.
    // Favorite.findBlogs()
    res.json(resources);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get Favorites', err });
  });
});

router.post('/', (req: Request, res: Response) => {
    Favorite.findByUserAndBlogPost(req.body.user_id, req.body.blogpost_id)
    .first()
    .then((post: any) => {
      if (post) {
        // This post is already in this users favorites.
        res.status(409).json({ message: `Blog with with id ${post.blogpostId} is already in this users favorites.` });
      } else {
        Favorite.add(req.body)
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

router.delete('/:user_id/:blogpost_id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.user_id, 10)
  const blogpostId = parseInt(req.params.blogpost_id, 10)
  Favorite.findByUserAndBlogPost(userId, blogpostId)
  .first()
  .then((favorite: any) => {
    Favorite.delete(favorite.id)
    .then(() => {
      res.status(201).json();
    }).catch((err: any) => {
        res.status(500).json({message: err.message})
    })
  })

})

module.exports = router;

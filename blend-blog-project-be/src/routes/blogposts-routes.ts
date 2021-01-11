
import express, {Request, Response} from 'express';
import { BlogPosts} from '../models/blogposts-model';

const BlogPost = new BlogPosts();


const router = express.Router();

router.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "access-control-allow-origin, content-type, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/', (req: Request, res: Response) => {
  BlogPost.find()
  .then((blogposts: any) => {
    res.header("access-control-allow-origin", "*");
    res.json(blogposts);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get BlogPost' });
  });
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  BlogPost.find(id)
  .first()
  .then((response: any) => {
    res.json(response);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get BlogPost' });
  });
});

router.post('/', (req: Request, res: Response) => {
    BlogPost.add(req.body)
    .then((response: any) => {
        res.status(201).json(response);
    }).catch((err: any) => {
        res.status(500).json({message: err.message})
    })
})

router.post('/:id', (req: Request, res: Response) => {
  BlogPost.add(req.body)
  .then((blogpost: any) => {
      res.status(201).json(blogpost);
  }).catch((err: any) => {
      res.status(500).json({message: err.message})
  })
})

router.delete('/:id', (req: Request, res: Response) => {
    // tslint:disable-next-line:no-console
    const id = parseInt(req.params.id, 10)
    BlogPost.deleteFavorite(id)
    .then(() => {
      BlogPost.delete(id)
      .then(() => {
        res.status(201).json();
      }).catch((err: any) => {
        res.status(500).json({message: err.message})
      })
    }).
    catch((err: any) => {
        res.status(500).json({message: err.message})
    })
  });

module.exports = router;

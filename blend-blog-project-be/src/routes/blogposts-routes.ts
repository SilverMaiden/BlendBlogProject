
import express, {Request, Response} from 'express';
import { BlogPosts} from '../models/blogposts-model';
const router = express.Router();

const BlogPost = new BlogPosts();

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
  .then((tasks: any) => {
    res.json(tasks);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get BlogPost' });
  });
});

router.post('/', (req, res) => {
    BlogPost.add(req.body)
    .then((response: any) => {
        res.status(201).json(response);
    }).catch((err: any) => {
        res.status(500).json({message: err.message})
    })
})

module.exports = router;

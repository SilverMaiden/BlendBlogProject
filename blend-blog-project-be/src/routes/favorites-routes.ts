
import express, {Request, Response} from 'express';
// const Favorite = require('../models/favorites-model.js');
import { Favorites } from '../models/favorites-model';
const router = express.Router();
const Favorite = new Favorites();


router.get('/', (req, res) => {
  Favorite.find()
  .then((resources: any) => {
    res.json(resources);
  })
  .catch((err: any) => {
    res.status(500).json({ message: 'Failed to get Favorite' });
  });
});

router.post('/', (req, res) => {
    Favorite.add(req.body)
    .then((response: any) => {
        res.status(201).json(response);
    }).catch((error: any) => {
        res.status(500).json({message: error.message})
    })
})

module.exports = router;

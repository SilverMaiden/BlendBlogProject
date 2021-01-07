
const express = require('express');

const Favorites = require('./favorites-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Favorites.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Favorites' });
  });
});


router.post('/', (req, res) => {
    Favorites.add(req.body)
    .then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(500).json({message: error.message})
    })
})


module.exports = router;

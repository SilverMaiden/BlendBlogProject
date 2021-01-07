
const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.get('/:id', (req, res) => {
  Users.find(req.params.id)
  .then(users => {
    res.json(users);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});

router.get('/:id/favorites', (req, res) => {
  Users.findFavorites(req.params.id)
  .then(favorites => {
    res.json(favorites);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get favorites' });
  });
});

router.post('/', (req, res) => {
    Users.add(req.body)
    .then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(500).json({message: "failed to add new user."})
    })
})

module.exports = router;

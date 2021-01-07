const express = require('express');
require('dotenv').config();

const UsersRouter = require('./users/users-routes.js');
const FavoritesRouter = require('./favorites/favorites-routes.js');
const BlogPostsRouter = require('./blogposts/blogposts-routes.js');

const server = express();

server.use(express.json());
server.use('/api/users', UsersRouter);
server.use('/api/favorites', FavoritesRouter);
server.use('/api/blogposts', BlogPostsRouter);

module.exports = server;

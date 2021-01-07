import express from 'express';

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const UsersRouter = require('./users/users-routes.js');
const FavoritesRouter = require('./favorites/favorites-routes.js');
const BlogPostsRouter = require('./blogposts/blogposts-routes.js');

const server = express();

server.use(express.json());
server.use('/api/users', UsersRouter);
server.use('/api/favorites', FavoritesRouter);
server.use('/api/blogposts', BlogPostsRouter);

export default server;

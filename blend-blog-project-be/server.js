import express from 'express';

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const UsersRouter = require('./src/routes/users-routes');
const FavoritesRouter = require('./src/routes/favorites-routes');
const BlogPostsRouter = require('./src/routes/blogposts-routes');
const LogInRouter = require('./src/routes/login_routes')

const server = express();

server.use(express.json());
server.use('/api/users', UsersRouter);
server.use('/api/favorites', FavoritesRouter);
server.use('/api/blogposts', BlogPostsRouter);
server.use('/api/login', LogInRouter);

export default server;

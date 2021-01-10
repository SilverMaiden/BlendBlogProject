import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const UsersRouter = require('./src/routes/users-routes');
const FavoritesRouter = require('./src/routes/favorites-routes');
const BlogPostsRouter = require('./src/routes/blogposts-routes');
const LogInRouter = require('./src/routes/login_routes')

const server = express();

// Middleware
server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

server.use(express.json());
server.use('/api/users/', UsersRouter);
server.use('/api/favorites/', FavoritesRouter);
server.use('/api/blogposts/', BlogPostsRouter);
server.use('/api/login/', LogInRouter);

export default server;

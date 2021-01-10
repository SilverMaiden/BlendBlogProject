"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
const UsersRouter = require('./src/routes/users-routes');
const FavoritesRouter = require('./src/routes/favorites-routes');
const BlogPostsRouter = require('./src/routes/blogposts-routes');
const LogInRouter = require('./src/routes/login_routes');
const RegisterRouter = require('./src/routes/register-routes');
const server = express_1.default();
// Middleware
server.use(express_1.default.json());
server.use(helmet_1.default());
server.use(morgan_1.default('tiny'));
server.use(cors_1.default());
server.use(express_1.default.json());
server.use('/api/register/', RegisterRouter);
server.use('/api/users/', UsersRouter);
server.use('/api/favorites/', FavoritesRouter);
server.use('/api/blogposts/', BlogPostsRouter);
server.use('/api/login/', LogInRouter);
exports.default = server;
//# sourceMappingURL=server.js.map
import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const server = express();
const prefix = '/logs'

server.set('port', process.env.PORT || 3000);

server.use(cors());
server.use(json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan('dev'));

server.use(`${prefix}/applications`, require('./routes/applications.routes'));
server.use(`${prefix}/authorizations`, require('./routes/authorizations.routes'));
server.use(`${prefix}/logs`, require('./routes/logs.routes'));

export default server;
import '@babel/polyfill';
import dotenv from 'dotenv';

dotenv.config();
import server from './server';
require('./database').connect();

server.listen(server.get('port'));
console.log('Server is running on port', server.get('port'));
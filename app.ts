import dotenv from 'dotenv'
import Server from './models/server';

dotenv.config();

const server: Server = new Server();

server.listen();
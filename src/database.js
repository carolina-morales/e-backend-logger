import mongoose, { mongo } from 'mongoose';
import config from './config';

const { mongo_host, mongo_port, mongo_dbname } = config;
const MONGO_URI = `mongodb://${mongo_host}:${mongo_port}/${mongo_dbname}`;

export async function connect() {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log('An error ocurred when you try to connect to the database', error);
  }
}
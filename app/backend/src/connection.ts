import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://localhost:27017/coleta';

const connectToDatabase = (
  mongoDatabaseURI = MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
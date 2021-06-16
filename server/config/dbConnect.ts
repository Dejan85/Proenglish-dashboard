import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.DB_URI);
  return client;
}

export default connectToDatabase;

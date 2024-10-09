import {Collection, Db, Document, MongoClient, WithId} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri: string = process.env.DATABASE_URL;
const client: MongoClient = new MongoClient(uri);

const resolvers = {
    Query: {
        movies: async () => {
            try {
                await client.connect();
                const database: Db = client.db('raw_data');
                const collection: Collection<Document> = database.collection('movies');
                const mediaDocuments: WithId<Document>[] = await collection.find({}).toArray();

                return mediaDocuments;
            } catch (error) {
                console.error(error);
            } finally {
                await client.close();
            }
        },
    },
};

export default resolvers;
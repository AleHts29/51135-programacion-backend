import dotenv from 'dotenv';
dotenv.config();

export const config = {
    server: {
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV,
        PERS: process.env.PERS
    },
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        host: process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    }
}
import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL!;
// CONNECT TO MONGODB
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToMongoDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL,{
            bufferCommands: true,
            maxPoolSize: 10,
        })
        .then(() => {
            cached.conn = mongoose.connection;
            return cached.conn;
        });
    }
}

    


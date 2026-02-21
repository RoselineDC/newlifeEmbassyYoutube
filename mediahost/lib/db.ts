const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL!;
console.log("MONGODB_URL", MONGODB_URL)
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
        .then(() => mongoose.connection);          
      
    }
    try { 
        cached.conn = await cached.promise
    } catch(error) {
        cached.promise = null;
        throw error
    }
    return cached.conn

}
export { connectToMongoDB}

    


import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log("Error connecting to the database", error);
        process.exit(1);
    }
}

export default dbConnect;

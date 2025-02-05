import mongoose from "mongoose"

export const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to mongoDB ${conn.connection.host}`);
    } catch (error) {
        console.log("Failed to conect to MongoDB", error);
        process.exit(1);
    }
};

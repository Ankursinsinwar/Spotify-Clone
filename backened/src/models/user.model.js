import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
        imageUrl: {
            type: String, 
            required: true,
        },
        clerkID: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {timestamps: true}
);

export const User = mongoose.model("User", userSchema);
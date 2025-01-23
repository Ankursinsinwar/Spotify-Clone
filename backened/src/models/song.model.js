import mongoose from "mongoose";

const songsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        artist: {
            type: String, 
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        audioUrl: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        albumId: {
            type: mongoose.Schema.Types.ObjectId, // Corrected this line
            ref: "Album",
            required: false,
        },
    },
    { timestamps: true }
);

export const Song = mongoose.model("Song", songsSchema);

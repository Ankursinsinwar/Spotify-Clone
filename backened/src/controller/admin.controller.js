import {Song} from "../models/song.model.js";
import {Album} from "../models/album.model.js";
import cloudinary from "./lib/cloudinary.js";

// helper function for cloudinary uploads
const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilepath, {
            resource_type: "auto",
        }
    )
    return result.secure_url;
    } catch (error) {
        console.log("error in uploadToCloudinary", error);
        throw new Error("Error UploadingToCloudinary");      
    }
};

// song creation function
export const createSong = async(req, res, next) =>{
    try {
        if(!req.files || req.files.audioFile || req.files.imageFile){
            return res.status(400).json({message: "please upload all files"});
        }

        const {title, artist, albumId, duration}= req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        const audioUrl = await uploadToCloudinary(audioFile);
        const imageUrl = await uploadToCloudinary(imageFile);

         const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null,
         });

         await song.save();

        //  if song belongs to any album, update the album's song array
         if(albumId){
            await Album.findByIdAndUpdate(albumId, {
                $push:{ songs:song._id },
            });
        }
        res.status(201).json(song);
    }   catch (error) {
        console.log("Error in creating", error);
        next(error);
    }
};

// delete song function
export const deleteSong = async (req, res, next) => {
    try {
        const { id } = req.params
        const song = await Song.findById(id);

        // if song belongs to an album, update the album's songs array
        if(song.albumId){
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: { songs: song._id },
            });
        }

        await Song.findByIdAndDelete(id);

        res.status(200).json({ message: "Song deleted successfully"});
    } catch (error) {
        console.log("Error in deleteSong", error);
        next(error);
    }
};

// create album function
export const createAlbum = async (req, res, next) => {
    try {
        const { title, artist, releaseYear } = req.body;
        const { imageFile } = req.files;

        const imageUrl = await uploadToCloudinary(imageFile);

        const album = new Album({
            title,
            artist,
            imageUrl,
            releaseYear,
        });

        await album.save();

        res.status(201).json(album);
    }   catch (error) {
        console.log("Error in deleteAlbum", error);
        next(error);
    }
};

// delete album function
export const deleteAlbum = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Song.deletemany({ albumId: id});
        await Album.findByIdAndDelete(id);
        res.status(200).json({ message: "Album deleted successfully"});
    } catch (error) {
        console.log("Error in deleteAlbum", error);
        next(error);
    }
};

// admin check button function
export const checkAdmin = async (req, res, next) => {
    res.status(200).json({ admin: true });
};
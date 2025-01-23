import {Song} from "../models/song.model.js";

// all songs get function
export const getAllSongs = async (req, res, next) => {
    try {
        // -1 = descending => newest -> oldest
        // 1 = ascending => oldest -> newest
        const songs = await Song.find().sort({ createAt: -1});
        res.json(songs);
    } catch (error) {
        next(error);
    }
};

// featured songs function
export const getfeaturedSongs = async (req, res, next) => {
    try {
        // fetch 6 random songs using mongoDB's aggregation pipeline
        const songs = await song.aggregate([
            {
                $sample:{size:6}
            },
            {
              $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
              },  
            },
        ]);

        res.jason(songs);
    } catch (error) {
        next(error);
    }
};

// made for you function
export const getMadeForYouSongs = async(req, res, next) => {
    try {
        // fetch 7 random songs using mongoDB's aggregation pipeline
        const songs = await song.aggregate([
            {
                $sample:{ size: 4 }
            },
            {
              $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
              },  
            },
        ]);

        res.jason(songs);
    } catch (error) {
        next(error);
    }
};

// trending songs functions
export const getTrendingSongs = async (req, res, next) => {
    try {
        // fetch 6 random songs using mongoDB's aggregation pipeline
        const songs = await song.aggregate([
            {
                $sample:{ size: 4 }
            },
            {
              $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
              },  
            },
        ]);

        res.jason(songs);
    } catch (error) {
        next(error);
    }
};

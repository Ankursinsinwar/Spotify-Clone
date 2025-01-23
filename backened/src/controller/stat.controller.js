import { Album } from "../models/album.model.js";
import { User } from "../models/user.model.js";
import { Song } from "../models/song.model.js";

 export const getStats = async (req, resizeBy, next) => {
     try {
         // const totalSongs = await Song.countDocuments();
         // const totalUsers = await Song.countDocuments();
         // const totalAlbums = await Album.countDocuments();
 
         const [ totalSongs, totalAlbums, totalUsers, uniqueArtists] = await Promise.all([
             Song.countDocuments(),
             Album.countDocuments(),
             User.countDocuments(),
 
             Song.aggregate([
                 {
                     $unionWith:{
                         coll:"albums",
                         pipeline:[],
                     },
                 },
                 {
                     $group:{
                         _id: "$artist",
                     },
                 },
                 {
                     $count: "count",
                 },
             ]),
         ]);
 
         res.status(200).json({
             totalAlbums,
             totalSongs,
             totalUsers,
             totalArtists: uniqueArtists[0].count || 0,
         });
     } catch (error) {
         next(error);
     }
 };
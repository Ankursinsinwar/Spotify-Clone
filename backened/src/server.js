import express from "express";
import dotenv from "dotenv"
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload"
import path from "path";
import cors from "cors";

import{connectDB} from "./controller/lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";




// this will read the value from the .env file on the port 5000
dotenv.config ();

const __dirname = path.resolve();
const app = express();
// to fetch data from .env files
const PORT = process.env.PORT;

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    })
);


app.use(express.json()); // to parese req.body
app.use(clerkMiddleware());
app.use(fileUpload({
    useTempFile: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits:{
        fileSize: 10 * 1024 * 1024 // 10 mb max file size
    }
}));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

// error handler
app.use((err, req, res, next) =>{
    res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.mrssage });
});


app.listen(PORT, async () => {
    await connectDB();
    console.log("Server is running on port " + PORT);
    
});

// todo: socket.io
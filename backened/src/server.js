import express from "express";
import dotenv from "dotenv"

// this will read the value from the .env file on the port 5000
dotenv.config ();

const app = express();

// to fetch data from .env files
const PORT = process.env.PORT

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
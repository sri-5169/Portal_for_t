import express from "express";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
// DefaultData();
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));

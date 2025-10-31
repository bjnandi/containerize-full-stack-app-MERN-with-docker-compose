const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

// Connect DB
mongoose
  .connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));
  mongoose.connection.on('connected', () => console.log('Mongo connected'));
  mongoose.connection.on('error', err => console.error('Mongo error', err));  

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./routes/user"));
app.get("/", (_req, res) => res.send("OK"));
app.listen(5000, () => console.log("Server is running on port 5000"));

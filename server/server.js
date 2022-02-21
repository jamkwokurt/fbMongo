const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8800;
const mongoose = require("mongoose");
const connectDB = require('./db/conn')

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//connect to mongoDB
connectDB()

//routes middleware
app.use('/server', authRoutes);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => console.log(`Backend server is running on port ${port}`));
});
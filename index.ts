import express from 'express';
const app = express();

import {Response,Request} from "express"
require('dotenv').config() // Load biến môi trường từ file .env
import arrayobject from './router/arrayobject';
app.use(express.json())

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, world!');
  });
const mongoose = require('mongoose');
const auth = require("./router/auth");


async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();



app.use('/arrayobject',arrayobject)
app.use("/auth",auth)
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
  
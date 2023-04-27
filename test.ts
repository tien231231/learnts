const express = require('express');
const app = express();
import {Response,Request} from "express"
require('dotenv').config() // Load biến môi trường từ file .env

app.use(express.json())

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, world!');
  });





app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
  
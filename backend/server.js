//Entry point of our api
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

//console.log(process.env.MONGO_URI);

app.get('/products', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    connectDB();
    console.log('server started at http://localhost:5000');
});
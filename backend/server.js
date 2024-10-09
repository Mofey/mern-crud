//Entry point of our api
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//console.log(process.env.MONGO_URI);

//just a middleware that runs before any request
app.use(express.json()); // to parse json data in the req.body

app.use('/api/products', productRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log('server started at http://localhost:' + PORT);
});
//Entry point of our api
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

//connect to the database
connectDB();

//console.log(process.env.MONGO_URI);

//just a middleware that runs before any request
app.use(express.json()); // to parse json data in the req.body

// API routes
app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === 'production'){
    //takes the dist folder to make it static assets
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        //renders the index.html file as our react application
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
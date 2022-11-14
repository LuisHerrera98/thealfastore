import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import categoriesRoutes from './routes/categories.routes.js';
import productsRoutes from './routes/product.routes.js';

// ENTORNO
dotenv.config()
//DATABASE CONECTION
import { sequelize } from './database/database.js'
// import "./models/Category.js"
const main = async () => {
    try {
        await sequelize.sync({ alter: true })
        console.log('Database Connected.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();

// SERVER
const app = express();
app.use(morgan('dev'))  
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration


app.use(express.static(path.join('public')));
app.use(express.json());
app.listen(process.env.PORT || 3000)
console.log('Server on port 3000');

// ROUTER
app.use('/category', categoriesRoutes)
app.use('/product', productsRoutes)

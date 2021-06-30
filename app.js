const express = require('express');


const app = express();
const dotenv = require('dotenv');

//  app.get('/', (req, res) => {
//      res.send("Hello World");
// });

//  app.get('/employees', (req,res) => {
//      res.send('Employees!');
//  });

const connectDB = require('./config/db');

// // Load Config
 dotenv.config({ path: './config/config.env' });
 
 connectDB();


app.listen(3000); 

  
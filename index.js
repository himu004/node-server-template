const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./config/db');
const users = require('./users');
const mongoose = require("mongoose");
const userModel = require("./model/user");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.use(express.urlencoded({ extended: false }));


//! If we use this middlewere it will run first before the server runs
// app.use((req, res, next) => {
//   console.log('Run First Middlewere');
//   return next()
// })

// Views
app.get('/', (req, res) =>{
  res.render('index');
})

app.get('/register', (req, res) =>{
  req.render('register');
})

// ------------ APIS -------------------


app.get('/', (req, res) => {
  res.send('Basic Server running')
})

app.get('/users', (req, res) => {
  res.send(users);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
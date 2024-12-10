const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./config/db');
const userModel = require("./model/user");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: truegit  }));


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
  res.render('register');
})

// ------------ APIS -------------------

app.post('/register',
    async (req, res) => {
      const {username, email, password} = req.body;
      const [newUser] = await Promise.all([userModel.create({
        username: username,
        email: email,
      })])

      res.send(newUser);

    })


// ----------------------------------------


app.get('/', (req, res) => {
  res.send('Basic Server running')
})

app.get('/users', (req, res) => {
  res.send(users);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
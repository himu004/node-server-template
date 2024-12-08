const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/basic-backend').then(() => {
  console.log('MongoDB Connected');
});

module.exports = connection;
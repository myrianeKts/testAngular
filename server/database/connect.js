const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', () => {
  console.log("Connection Successful!");
});

module.exports = db;

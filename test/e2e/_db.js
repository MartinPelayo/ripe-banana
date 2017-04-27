process.env.MONGODB_URI = 'mongodb://localhost:27107/ripe-banana-test';
require('../../connect');

const connection = require('mongoose').connection;

module.exports = {
  drop(){
    return connection.dropDatabase();
  }
};
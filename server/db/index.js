const db = require('./database');
const User = require('./schemas/User');
const Crossword = require('./schemas/Crossword');

module.exports = {
  db,
  User,
  Crossword,
};

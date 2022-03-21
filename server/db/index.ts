const db = require('./database');
const User = require('./schemas/user');
const Crossword = require('./schemas/crossword');

module.exports = {
  db,
  User,
  Crossword,
};

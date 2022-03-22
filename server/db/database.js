const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/crosswars', {
  logging: false,
});

module.exports = db;

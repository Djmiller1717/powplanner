const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'postgres:localhost:5432/pow-planner';

const db = new Sequelize(databaseUrl, {
  logging: false,
});

module.exports = db;

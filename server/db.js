// db.js
const { Sequelize } = require('sequelize');

// Initialize Sequelize with MySQL connection details
const sequelize = new Sequelize('your_database_name', 'your_mysql_username', 'your_mysql_password', {
  host: 'localhost',
  dialect: 'mysql',  
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };

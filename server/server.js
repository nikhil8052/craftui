// server.js or any entry file
const sequelize = require('./db');
const User = require('./models/User');

const startServer = async () => {
  try {
    // Sync all models with the database
    await sequelize.sync(); // Creates the table if it doesn't exist
    console.log('Database models synced successfully.');

    // Start your server or app here
    // e.g., app.listen() for Express
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

startServer();

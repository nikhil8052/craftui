// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import sequelize instance correctly

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Name is required
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Email must be unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Password is required
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'), // Can be 'user' or 'admin'
    defaultValue: 'user', // Default role is 'user'
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = User;

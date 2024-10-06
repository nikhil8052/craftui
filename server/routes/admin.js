// routes/admin.js
const express = require('express');
const router = express.Router();
const adminAuthMiddleware = require('../middleware/auth');
const adminController = require('../controllers/adminController');

// Protect all admin routes
router.use(adminAuthMiddleware);

// router.get('/dashboard', adminController.getDashboardData);
// router.post('/update', adminController.updateAdminData);

module.exports = router;

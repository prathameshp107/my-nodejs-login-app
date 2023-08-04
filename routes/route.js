const express = require('express');
const router = express.Router();
const path = require('path');


// Require the authController
const authController = require('../controllers/authController');

// Serve login.html directly
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

// Serve register.html directly
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

// Handle login and register POST requests using the authController
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;

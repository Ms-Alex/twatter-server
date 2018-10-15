const express = require('express');
const router = express.Router();
const { signup } = require('../handlers/auth');

// if there is any post requests to signup, i want to use the signup function
router.post('/signup', signup);

module.exports = router;
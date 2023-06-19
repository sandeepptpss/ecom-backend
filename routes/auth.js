const authController = require('../controller/auth')
const express = require('express');
const router = express.Router();

router.post('/login', authController.Login)

exports.router = router;  
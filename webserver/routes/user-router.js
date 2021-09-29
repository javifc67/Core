'use strict';

const express = require('express');
const router = express.Router();

const { getUserProfile } = require('../controllers/user/get-user-profile');

router.get('/user', getUserProfile);

module.exports = router;

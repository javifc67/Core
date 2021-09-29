'use strict';

const express = require('express');
const router = express.Router();

const { getUserProfile } = require('../controllers/user/get-profile');
const { createUser } = require('../controllers/user/create');

router.get('/user', getUserProfile);
router.post('/user', createUser);

module.exports = router;

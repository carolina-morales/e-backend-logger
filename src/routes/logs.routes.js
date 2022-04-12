'use strict';

import { isAuthenticated } from '../middleware/checkJwt';
const router = require('express').Router();

const controller = require('../controllers/logs.controller');

router.get(`/`, isAuthenticated, controller.all);

module.exports = router;
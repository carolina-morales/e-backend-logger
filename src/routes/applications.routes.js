'use strict';

import { isAuthenticated } from '../middleware/checkJwt';
import ApplicationsSchema from '../schemas/applications';
import validate from '../middleware/checkData';
const router = require('express').Router();

const controller = require('../controllers/applications.controller');

router.get('/', isAuthenticated, controller.all);
router.post('/', isAuthenticated, validate(ApplicationsSchema), controller.create);
router.put(`/:id`, isAuthenticated, controller.update);
router.delete(`/:id`, isAuthenticated, controller.delete);

module.exports = router;
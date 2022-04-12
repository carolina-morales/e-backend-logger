'use strict';

import { isAuthenticated } from '../middleware/checkJwt';
import AuthorizationsSchema from '../schemas/authorizations';
import validate from '../middleware/checkData';
const router = require('express').Router();

const controller = require('../controllers/authorizations.controller');

router.get(`/`, isAuthenticated, controller.all);
router.post(`/`, validate(AuthorizationsSchema), controller.create);

module.exports = router;
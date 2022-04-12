'use strict';

import config from '../config';
import Authorization from '../models/authorizations';
import jwt from 'jsonwebtoken';

class AuthorizationController {
  async all(req, res) {
    try {
      const tokens = await Authorization.find();

      res.json(tokens);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res) {
    try {
      const token = jwt.sign({}, config.secret_key);

      if (token) {
        const newToken = new Authorization({ token });
        await newToken.save();

        res.json(token);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthorizationController();
'use strict';

import Logs from '../models/logs';

class LogsController {
  async all(req, res) {
    try {
      const logs = await Logs.find();

      res.json(logs);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res) {
    try {
      res.json(true);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new LogsController();
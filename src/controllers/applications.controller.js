'use strict';

import Application from '../models/applications';
import Logs from '../models/logs';

class ApplicationsController {
  async all(req, res) {
    try {
      const applications = await Application.find();

      res.json(applications);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res) {
    const { name } = req.body;

    const newApplication = new Application({ name });
    const savedApp = await newApplication.save();
    let newLog;

    if (savedApp) {
      newLog = new Logs({
        application_id: savedApp,
        path: '/logs/applications',
        message: 'Application saved',
        priority: 'lowest',
        highest: 'info',
        request: { data: req.body },
        response: { data: { message: 'Application saved' } }
      });
    } else {
      newLog = new Logs({
        application_id: savedApp,
        path: '/logs/applications',
        message: 'Application not saved',
        priority: 'high',
        highest: 'error',
        request: { data: req.body },
        response: { data: { message: 'Application not saved' } }
      });
    }

    await newLog.save();
    savedApp ? res.json(savedApp) : res.json({ message: 'Application not saved.' });
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await Application.findByIdAndUpdate(id, { name }, { new: true });
    let newLog;

    if (updated) {
      newLog = new Logs({
        application_id: updated,
        path: '/logs/applications',
        message: 'Application updated',
        priority: 'lowest',
        highest: 'info',
        request: { data: req.body },
        response: { data: { message: 'Application updated' } }
      });
    } else {
      newLog = new Logs({
        application_id: updated,
        path: '/logs/applications',
        message: 'Application not updated',
        priority: 'high',
        highest: 'error',
        request: { data: req.body },
        response: { data: { message: 'Application not updated' } }
      });
    }

    await newLog.save();
    updated ? res.json(updated) : res.json({ message: 'Application not updated.' });
  }

  async delete(req, res) {
    const { id } = req.params;

    const removed = await Application.findByIdAndRemove(id, { new: true });
    let newLog;

    if (removed) {
      newLog = new Logs({
        application_id: removed,
        path: '/logs/applications',
        message: 'Application removed',
        priority: 'lowest',
        highest: 'info',
        request: { data: req.body },
        response: { data: { message: 'Application removed' } }
      });
    } else {
      newLog = new Logs({
        application_id: removed,
        path: '/logs/applications',
        message: 'Application not removed',
        priority: 'high',
        highest: 'error',
        request: { data: req.body },
        response: { data: { message: 'Application not removed' } }
      });
    }

    await newLog.save();
    removed ? res.json(removed) : res.json({ message: 'Application not removed.' });
  }
}

module.exports = new ApplicationsController();
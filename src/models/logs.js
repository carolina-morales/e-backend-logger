import { Schema, model } from 'mongoose';

const LogsModel = new Schema({
  application_id: {
    type: Schema.Types.ObjectId,
    ref: 'Application',
  },
  type: {
    type: Schema.Types.String,
    enum: ['error', 'info', 'warning']
  },
  priority: {
    type: Schema.Types.String,
    enum: ['lowest', 'low', 'medium', 'high', 'highest']
  },
  path: {
    type: Schema.Types.String,
    required: true
  },
  message: {
    type: Schema.Types.String,
    required: true
  },
  request: new Schema({
    data: {
      type: Schema.Types.Mixed
    }
  }),
  response: new Schema({
    data: {
      type: Schema.Types.Mixed
    }
  })
}, {
  timestamps: true,
});

module.exports = model('Logs', LogsModel);
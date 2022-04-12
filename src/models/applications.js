import { Schema, model } from 'mongoose';

const ApplicationModel = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model('Application', ApplicationModel);
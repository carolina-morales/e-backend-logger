import { Schema, model } from 'mongoose';

const AuthorizationModel = new Schema({
  token: {
    type: Schema.Types.String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model('Authorization', AuthorizationModel);
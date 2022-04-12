const Joi = require('joi');

const AuthorizationSchema = Joi.object({
  token: Joi.string().required()
});

module.exports = AuthorizationSchema;
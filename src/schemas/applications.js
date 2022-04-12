const Joi = require('joi');

const ApplicationsSchema = Joi.object({
  name: Joi.string().required()
});

module.exports = ApplicationsSchema;
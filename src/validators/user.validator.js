import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    age: Joi.number().integer().min(18).max(45).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(8).required(),

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

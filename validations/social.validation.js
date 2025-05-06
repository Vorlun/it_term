import Joi from "joi";

export const createsocialValidation = Joi.object({
  social_name: Joi.string().required(),
  social_icon_file: Joi.string().optional(),
});

export const updatesocialValidation = Joi.object({
  social_name: Joi.string(),
  social_icon_file: Joi.string(),
});

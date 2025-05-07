import Joi from "joi";

export const createDescValidation = Joi.object({
  description: Joi.string().required(),
  category_id: Joi.string().required(),
});

export const updateDescValidation = Joi.object({
  description: Joi.string(),
  category_id: Joi.string(),
});

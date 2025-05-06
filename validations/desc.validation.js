import Joi from "joi";

export const createdescValidation = Joi.object({
  description: Joi.string().required(),
  category_id: Joi.string().required(),
});

export const updatedescValidation = Joi.object({
  description: Joi.string(),
  category_id: Joi.string(),
});

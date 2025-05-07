import Joi from "joi";

export const createDictValidation = Joi.object({
  term: Joi.string().trim().required(),
  letter: Joi.string().uppercase().optional(),
});

export const updateDictValidation = Joi.object({
  term: Joi.string().trim(),
  letter: Joi.string().uppercase(),
});

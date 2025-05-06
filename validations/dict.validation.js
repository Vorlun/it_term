import Joi from "joi";

export const createdictValidation = Joi.object({
  term: Joi.string().trim().required(),
  letter: Joi.string().uppercase().optional(),
});

export const updatedictValidation = Joi.object({
  term: Joi.string().trim(),
  letter: Joi.string().uppercase(),
});

import Joi from "joi";

export const createQAValidation = Joi.object({
  question: Joi.string().required(),
  answer: Joi.string().required(),
  is_checked: Joi.boolean().optional(),
  user_id: Joi.string().required(),
  expert_id: Joi.string().required(),
});

export const updateQAValidation = Joi.object({
  question: Joi.string(),
  answer: Joi.string(),
  is_checked: Joi.boolean(),
  user_id: Joi.string(),
  expert_id: Joi.string(),
});

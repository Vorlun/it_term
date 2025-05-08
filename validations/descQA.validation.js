import Joi from "joi";

export const createDescQAValidation = Joi.object({
  qa_id: Joi.string().required(),
  desc_id: Joi.string().required(),
});

export const updateDescQAValidation = Joi.object({
  qa_id: Joi.string(),
  desc_id: Joi.string(),
});

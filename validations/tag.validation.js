import Joi from "joi";

export const createTagValidation = Joi.object({
  topic_id: Joi.string().required(),
  category_id: Joi.string().required(),
});

export const updateTagValidation = Joi.object({
  topic_id: Joi.string(),
  category_id: Joi.string(),
});

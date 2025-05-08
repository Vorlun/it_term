import Joi from "joi";

export const createDescTopicValidation = Joi.object({
  desc_id: Joi.string().required(),
  topic_id: Joi.string().required(),
});

export const updateDescTopicValidation = Joi.object({
  desc_id: Joi.string(),
  topic_id: Joi.string(),
});

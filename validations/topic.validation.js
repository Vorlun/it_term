import Joi from "joi";

export const createTopicValidation = Joi.object({
  author_id: Joi.string().required(),
  topic_title: Joi.string().required(),
  topic_text: Joi.string().required(),
  is_checked: Joi.boolean().optional(),
  is_approved: Joi.boolean().optional(),
  expert_id: Joi.string().required(),
});

export const updateTopicValidation = Joi.object({
  author_id: Joi.string(),
  topic_title: Joi.string(),
  topic_text: Joi.string(),
  is_checked: Joi.boolean(),
  is_approved: Joi.boolean(),
  expert_id: Joi.string(),
});

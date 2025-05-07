import Joi from "joi";

export const createAuthorValidation = Joi.object({
  author_first_name: Joi.string().required(),
  author_last_name: Joi.string().required(),
  author_nick_name: Joi.string().optional(),
  author_email: Joi.string().email().required(),
  author_phone: Joi.string().optional(),
  author_password: Joi.string().min(6).required(),
  author_info: Joi.string().optional(),
  author_position: Joi.string().optional(),
  author_photo: Joi.string().optional(),
  is_expert: Joi.boolean().optional(),
  author_is_active: Joi.boolean().optional(),
});

export const updateAuthorValidation = Joi.object({
  author_first_name: Joi.string(),
  author_last_name: Joi.string(),
  author_nick_name: Joi.string(),
  author_email: Joi.string().email(),
  author_phone: Joi.string(),
  author_password: Joi.string().min(6),
  author_info: Joi.string(),
  author_position: Joi.string(),
  author_photo: Joi.string(),
  is_expert: Joi.boolean(),
  author_is_active: Joi.boolean(),
});

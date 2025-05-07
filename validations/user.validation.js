import Joi from "joi";

export const createUserValidation = Joi.object({
  user_name: Joi.string().trim().required(),
  user_email: Joi.string().email().required(),
  user_password: Joi.string().min(6).required(),
  user_info: Joi.string().optional(),
  user_photo: Joi.string().optional(),
  user_is_active: Joi.boolean().optional(),
});

export const updateUserValidation = Joi.object({
  user_name: Joi.string().trim(),
  user_email: Joi.string().email(),
  user_password: Joi.string().min(6),
  user_info: Joi.string(),
  user_photo: Joi.string(),
  user_is_active: Joi.boolean(),
});

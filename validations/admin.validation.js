import Joi from "joi";

export const createAdminValidation = Joi.object({
  admin_name: Joi.string().required(),
  admin_email: Joi.string().email().required(),
  admin_phone: Joi.string().optional(),
  admin_password: Joi.string().min(6).required(),
  admin_is_active: Joi.boolean().optional(),
  admin_is_creator: Joi.boolean().optional(),
});

export const updateAdminValidation = Joi.object({
  admin_name: Joi.string(),
  admin_email: Joi.string().email(),
  admin_phone: Joi.string(),
  admin_password: Joi.string().min(6),
  admin_is_active: Joi.boolean(),
  admin_is_creator: Joi.boolean(),
});

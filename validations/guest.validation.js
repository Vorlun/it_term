import Joi from "joi";

export const createGuestValidation = Joi.object({
  guest_ip: Joi.string().ip().required(),
  guest_os: Joi.string().optional(),
  guest_device: Joi.string().optional(),
  guest_browser: Joi.string().optional(),
  guest_reg_date: Joi.date().optional(),
});

export const updateGuestValidation = Joi.object({
  guest_ip: Joi.string().ip(),
  guest_os: Joi.string(),
  guest_device: Joi.string(),
  guest_browser: Joi.string(),
  guest_reg_date: Joi.date(),
});

import Joi from "joi";

export const createSocialValidation = Joi.object({
  social_name: Joi.string().required(),
  social_icon_file: Joi.string().optional(),
});

export const updateSocialValidation = Joi.object({
  social_name: Joi.string(),
  social_icon_file: Joi.string(),
});

// validations/authorSocial.validation.js
import Joi from "joi";

export const createAuthorSocialValidation = Joi.object({
  author_id: Joi.string().required(),
  social_id: Joi.string().required(),
  value: Joi.string().required(),
});

export const updateAuthorSocialValidation = Joi.object({
  author_id: Joi.string(),
  social_id: Joi.string(),
  value: Joi.string(),
});

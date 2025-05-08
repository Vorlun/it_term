import Joi from "joi";

export const createSynonymValidation = Joi.object({
  desc_id: Joi.string().required(),
  dict_id: Joi.string().required(),
});

export const updateSynonymValidation = Joi.object({
  desc_id: Joi.string(),
  dict_id: Joi.string(),
});

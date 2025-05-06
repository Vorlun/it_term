import Joi from "joi";

export const createcategoryValidation = Joi.object({
  category_name: Joi.string().required(),
  parent_category_id: Joi.string().optional(),
});

export const updatecategoryValidation = Joi.object({
  category_name: Joi.string(),
  parent_category_id: Joi.string(),
});

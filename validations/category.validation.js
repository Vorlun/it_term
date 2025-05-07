import Joi from "joi";

export const createCategoryValidation = Joi.object({
  category_name: Joi.string().required(),
  parent_category_id: Joi.string().optional(),
});

export const updateCategoryValidation = Joi.object({
  category_name: Joi.string(),
  parent_category_id: Joi.string(),
});

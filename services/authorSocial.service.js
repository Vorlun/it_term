import authorSocial from "../models/authorSocial.model.js";
import { validateObjectIds } from "../lib/validateObjectIds.js";

const create = async (data) => {
  validateObjectIds({ author_id: data.author_id, social_id: data.social_id });
  return authorSocial.create(data);
};

const update = async (id, data) => {
  validateObjectIds({
    id,
    author_id: data.author_id,
    social_id: data.social_id,
  });
  return authorSocial.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

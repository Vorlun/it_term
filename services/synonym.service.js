import synonym from "../models/synonym.model.js";
import { validateObjectIds } from "../lib/validateObjectIds.js";

const create = async (data) => {
  validateObjectIds({ desc_id: data.desc_id, synonym_id: data.synonym_id });
  return synonym.create(data);
};

const update = async (id, data) => {
  validateObjectIds({ desc_id: data.desc_id, dict_id: data.dict_id });
  return synonym.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

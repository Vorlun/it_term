import descQA from "../models/descQA.model.js";
import {validateObjectIds} from "../lib/validateObjectIds.js";

const create = async (data) => {
  validateObjectIds({ qa_id: data.qa_id, desc_id: data.desc_id });
  return descQA.create(data);
};

const update = async (id, data) => {
  validateObjectIds({ id, qa_id: data.qa_id, desc_id: data.desc_id });
  return descQA.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

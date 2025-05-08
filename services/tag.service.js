import tag from "../models/tag.model.js";
import { validateObjectIds } from "../lib/validateObjectIds.js";

const create = async (data) => {
  validateObjectIds({ topic_id: data.topic_id, category_id: data.category_id });
  return tag.create(data);
};

const update = async (id, data) => {
  validateObjectIds({
    id,
    topic_id: data.topic_id,
    category_id: data.category_id,
  });
  return tag.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

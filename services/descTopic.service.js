import descTopic from "../models/descTopic.model.js";
import { validateObjectIds } from "../lib/validateObjectIds.js";

const create = async (data) => {
  validateObjectIds({ desc_id: data.desc_id, topic_id: data.topic_id });
  return descTopic.create(data);
};

const update = async (id, data) => {
  validateObjectIds({ id, desc_id: data.desc_id, topic_id: data.topic_id });
  return descTopic.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

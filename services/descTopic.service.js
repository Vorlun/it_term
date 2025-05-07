import descTopic from "../models/descTopic.model.js";
import mongoose from "mongoose";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const create = async (data) => {
  if (!isValidObjectId(data.desc_id) || !isValidObjectId(data.topic_id)) {
    throw new Error("Invalid desc_id or topic_id");
  }
  return descTopic.create(data);
};

const update = async (id, data) => {
  if (
    !isValidObjectId(id) ||
    !isValidObjectId(data.desc_id) ||
    !isValidObjectId(data.topic_id)
  ) {
    throw new Error("Invalid ID");
  }
  return descTopic.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

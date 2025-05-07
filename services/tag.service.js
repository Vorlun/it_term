import tag from "../models/tag.model.js";
import mongoose from "mongoose";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const create = async (data) => {
  if (!isValidObjectId(data.topic_id) || !isValidObjectId(data.category_id)) {
    throw new Error("Invalid topic_id or category_id");
  }
  return tag.create(data);
};

const update = async (id, data) => {
  if (
    !isValidObjectId(id) ||
    !isValidObjectId(data.topic_id) ||
    !isValidObjectId(data.category_id)
  ) {
    throw new Error("Invalid ID");
  }
  return tag.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

import descQA from "../models/descQA.model.js";
import mongoose from "mongoose";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const create = async (data) => {
  if (!isValidObjectId(data.qa_id) || !isValidObjectId(data.desc_id)) {
    throw new Error("Invalid qa_id or desc_id");
  }
  return descQA.create(data);
};

const update = async (id, data) => {
  if (
    !isValidObjectId(id) ||
    !isValidObjectId(data.qa_id) ||
    !isValidObjectId(data.desc_id)
  ) {
    throw new Error("Invalid ID");
  }
  return descQA.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

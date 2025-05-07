import synonym from "../models/synonym.model.js";
import mongoose from "mongoose";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const create = async (data) => {
  if (!isValidObjectId(data.desc_id) || !isValidObjectId(data.dict_id)) {
    throw new Error("Invalid desc_id or dict_id");
  }
  return synonym.create(data);
};

const update = async (id, data) => {
  if (
    !isValidObjectId(id) ||
    !isValidObjectId(data.desc_id) ||
    !isValidObjectId(data.dict_id)
  ) {
    throw new Error("Invalid ID");
  }
  return synonym.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

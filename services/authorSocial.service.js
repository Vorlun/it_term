import AuthorSocial from "../models/authorSocial.model.js";
import mongoose from "mongoose";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const create = async (data) => {
  if (!isValidObjectId(data.author_id) || !isValidObjectId(data.social_id)) {
    throw new Error("Invalid author_id or social_id");
  }
  return AuthorSocial.create(data);
};

const update = async (id, data) => {
  if (
    !isValidObjectId(id) ||
    !isValidObjectId(data.author_id) ||
    !isValidObjectId(data.social_id)
  ) {
    throw new Error("Invalid ID");
  }
  return AuthorSocial.findByIdAndUpdate(id, data, { new: true });
};

export default { create, update };

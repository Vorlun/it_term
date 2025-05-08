import mongoose from "mongoose";

export const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const validateObjectIds = (ids = {}) => {
  const invalidKeys = Object.entries(ids)
    .filter(([_, value]) => !isValidObjectId(value))
    .map(([key]) => key);

  if (invalidKeys.length > 0) {
    throw new Error(`Invalid ObjectId(s): ${invalidKeys.join(", ")}`);
  }
};

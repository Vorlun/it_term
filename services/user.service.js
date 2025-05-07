import userModel from "../models/user.model.js";

const create = (data) => userModel.create(data);

const getAll = (limit, page) =>
  userModel
    .find()
    .limit(limit)
    .skip((page - 1) * limit);

const getOne = (id) => userModel.findById(id);

const update = (id, data) =>
  userModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => userModel.findByIdAndDelete(id);

const count = () => userModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

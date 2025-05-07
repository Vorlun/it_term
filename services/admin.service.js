import adminModel from "../models/admin.model.js";

const create = (data) => adminModel.create(data);

const getAll = (limit, page) =>
  adminModel.find()
    .limit(limit)
    .skip((page-1) * limit);

const getOne = (id) => adminModel.findById(id);

const update = (id, data) =>
  adminModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => adminModel.findByIdAndDelete(id);

const count = () => adminModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

import adminModel from "../models/admin.model.js";

const create = (data) => adminModel.create(data);

const getAll = (limit = 10, page = 0) =>
  adminModel.find()
    .limit(limit)
    .skip(page * limit);

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

import descModel from "../models/desc.model.js";

const create = (data) => descModel.create(data);

const getAll = (limit = 10, page = 0) =>
  descModel.find().populate('category_id', 'category_name')
    .limit(limit)
    .skip(page * limit);

const getOne = (id) =>
  descModel.findById(id).populate("category_id", "category_name");

const update = (id, data) =>
  descModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => descModel.findByIdAndDelete(id);

const count = () => descModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

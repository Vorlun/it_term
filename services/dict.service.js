import dictModel from "../models/dict.model.js";

const create = (data) => dictModel.create(data);

const getAll = (limit = 10, page = 0) =>
  dictModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => dictModel.findById(id);

const update = (id, data) =>
  dictModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => dictModel.findByIdAndDelete(id);

const count = () => dictModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

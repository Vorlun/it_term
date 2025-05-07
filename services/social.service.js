import socialModel from "../models/social.model.js";

const create = (data) => socialModel.create(data);

const getAll = (limit, page) =>
  socialModel
    .find()
    .limit(limit)
    .skip((page - 1) * limit);

const getOne = (id) => socialModel.findById(id);

const update = (id, data) =>
  socialModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => socialModel.findByIdAndDelete(id);

const count = () => socialModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

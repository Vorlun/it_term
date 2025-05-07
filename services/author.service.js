import authorModel from "../models/author.model.js";

const create = (data) => authorModel.create(data);

const getAll = (limit , page ) =>
  authorModel
    .find()
    .limit(limit)
    .skip((page - 1) * limit);

const getOne = (id) => authorModel.findById(id);

const update = (id, data) =>
  authorModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => authorModel.findByIdAndDelete(id);

const count = () => authorModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

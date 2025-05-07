import guestModel from "../models/guest.model.js";

const create = (data) => guestModel.create(data);

const getAll = (limit, page) =>
  guestModel
    .find()
    .limit(limit)
    .skip((page - 1) * limit);

const getOne = (id) => guestModel.findById(id);

const update = (id, data) =>
  guestModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => guestModel.findByIdAndDelete(id);

const count = () => guestModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

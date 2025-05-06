import QAModel from "../models/QA.model.js";

const create = (data) => QAModel.create(data);

const getAll = (limit = 10, page = 0) =>
  QAModel.find().populate("user_id", "user_name" ).populate("expert_id","user_name")
    .limit(limit)
    .skip(page * limit);

const getOne = (id) =>
  QAModel.findById(id)
    .populate("user_id", "user_name")
    .populate("expert_id", "user_name");

const update = (id, data) =>
  QAModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => QAModel.findByIdAndDelete(id);

const count = () => QAModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

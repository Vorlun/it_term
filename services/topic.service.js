import topicModel from "../models/topic.model.js";

const create = (data) => topicModel.create(data);

const getAll = (limit, page) =>
  topicModel
    .find()
    .populate("author_id", "author_first_name author_last_name author_email")
    .populate("expert_id", "author_first_name author_email")
    .limit(limit)
    .skip((page - 1) * limit);

const getOne = (id) =>
  topicModel
    .findById(id)
    .populate("author_id", "author_first_name author_last_name author_email")
    .populate("expert_id", "author_first_name author_email");

const update = (id, data) =>
  topicModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => topicModel.findByIdAndDelete(id);

const count = () => topicModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

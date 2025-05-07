import categoryModel from "../models/category.model.js";

const create = (data) => categoryModel.create(data);

const getAll = (limit, page) =>
  categoryModel
    .find()
    .populate("parent_category_id", "category_name")
    .limit(limit)
    .skip((page - 1) * limit);

const getOne = (id) =>
  categoryModel.findById(id).populate("parent_category_id", "category_name");

const update = (id, data) =>
  categoryModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => categoryModel.findByIdAndDelete(id);

const count = () => categoryModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};

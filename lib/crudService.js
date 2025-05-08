export function createCrudService(model) {
  return {
    create: (data) => model.create(data),
    getAll: (limit, page) =>
      model
        .find()
        .limit(limit)
        .skip((page - 1) * limit),
    getOne: (id) => model.findById(id),
    update: (id, data) =>
      model.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      }),
    remove: (id) => model.findByIdAndDelete(id),
    count: () => model.countDocuments(),
  };
}

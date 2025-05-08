import tagService from "../services/tag.service.js";

export const create = async (req, res, next) => {
  try {
    const result = await tagService.create(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const result = await tagService.update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ success: false, message: "tag not found" });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
